define(['lib/underscore.js', 'spec/initMocha.js'], function(_){

  var follows = function(instantiator, pattern, options, prototypeOfInstances){
    var patternIs = function(){
      return _(arguments).contains(pattern);
    };

    if(!patternIs(
      'functional',
      'functional-shared',
      'prototypal',
      'pseudoclassical'
    )){
      throw new Error('Unrecognized class pattern');
    }

    if(patternIs('prototypal') && !prototypeOfInstances){
      throw new Error('Testing the prototypal pattern requires you to supply the expected prototype');
    }

    var requireOption = function(optionName){
      return option(optionName, true);
    };

    var option = function(optionName, required){
      if(required && !options.hasOwnProperty(optionName)){
        throw new Error('testClassPattern requires the '+optionName+' option');
      }
      var setting = options[optionName];
      delete options[optionName];
      return setting;
    }

    options = options || {};
    _(options).extend({
      usesNew:           patternIs(                                                 'pseudoclassical'),
      referencesThis:    patternIs(                                                 'pseudoclassical'),
      extendsPrototype:  patternIs(                                                 'pseudoclassical'),
      reusesMethods:     patternIs(              'functional-shared', 'prototypal', 'pseudoclassical'),
      referencesReturn:  patternIs('functional', 'functional-shared', 'prototypal'                   ),
      declaresVariables: patternIs('functional', 'functional-shared', 'prototypal'                   ),
      hasOwnMethods:     patternIs('functional', 'functional-shared'                                 ),
      extendsInstantiator: options.extendsInstantiator || false
    });

    prototypeOfInstances = (
      patternIs('functional') ? Object.prototype :
      patternIs('functional-shared') ? Object.prototype :
      patternIs('pseudoclassical') ? instantiator.prototype :
      prototypeOfInstances
    );

    var constructionArgs = option('constructionArgs') || [];
    var usesNew = requireOption('usesNew');
    var generateInstance = function(){
      if(!usesNew){
        return instantiator.apply(this, constructionArgs);
      } else {
        var instance = Object.create(instantiator.prototype);
        var constructorReturn = instantiator.prototype.constructor.apply(instance, constructionArgs);
        if(constructorReturn && constructorReturn !== instance){
          console.warn("Psuedoclassical constructor returned something explicitly (returns `this` implicitly by default).");
        }
        return instance;
      }
    };
    var instance = generateInstance();

    describe(pattern + ' instantiation style', function(){

      var doesOrDoesnt = function(behavior, setting){
        return 'does ' + (setting ? '' : 'not ') + behavior;
      };

      var assuming = function(condition, expectActual){
        return condition ? expectActual : expectActual.not;
      };

      after(function(){
        if(!_(options).isEmpty()){
          console.warn('testClassPattern is being invoked with unused options: ', options);
        };
      });

      var extendsInstantiator = requireOption('extendsInstantiator');
      it(doesOrDoesnt('extend the instantiator function', extendsInstantiator), function(){
        instantiatorPropertyCount = Object.keys(instantiator).length;
        assuming(extendsInstantiator, expect(instantiatorPropertyCount)).to.be.above(0);
      });

      var extendsPrototype = requireOption('extendsPrototype');
      it(doesOrDoesnt('extend the instantiator function\'s prototype', extendsPrototype), function(){
        var prototypeObjectPropertyCount = Object.keys(instantiator.prototype).length;
        assuming(extendsPrototype, expect(prototypeObjectPropertyCount)).to.be.above(0);
      });

      var referencesThis = requireOption('referencesThis');
      it(doesOrDoesnt('reference the the keyword this', referencesThis), function(){
        assuming(referencesThis, expect(/this/.test(instantiator))).to.be.true;
      });

      var referencesReturn = requireOption('referencesReturn');
      it(doesOrDoesnt('reference the return keyword', referencesReturn), function(){
        assuming(referencesReturn, expect(/return/.test(instantiator))).to.be.true;
      });

      var declaresVariables = requireOption('declaresVariables');
      it(doesOrDoesnt('declare variables', declaresVariables), function(){
        assuming(declaresVariables, expect(/var /.test(instantiator))).to.be.true;
      });

      var hasOwnMethods = requireOption('hasOwnMethods');
      it(doesOrDoesnt('store methods without use of a prototype chain', hasOwnMethods), function(){
        _(instance).methods().forEach(function(methodName){
          assuming(hasOwnMethods, expect(instance.hasOwnProperty(methodName))).to.be.true;
        });
      });

      var reusesMethods = requireOption('reusesMethods');
      it(doesOrDoesnt('reuse methods across multiple instances', reusesMethods), function(){
        var otherInstance = generateInstance();
        _(instance).methods().forEach(function(methodName){
          assuming(reusesMethods, expect(instance[methodName])).to.equal(otherInstance[methodName]);
        });
      });

      it('makes new instances that delegate to appropriate prototype object', function(){
        expect(prototypeOfInstances.isPrototypeOf(instance)).to.be.true;
      });

      var instantiatorPrototypeProto = option('instantiatorPrototypeProto');
      if(instantiatorPrototypeProto){
        it('makes the instantiator\'s .prototype property delegate to the appropriate prototype object', function(){
          expect(instantiatorPrototypeProto.isPrototypeOf(instantiator.prototype)).to.be.true;
        });
      }

      it('has a .prototype.constructor property that points back to the instantiator itself', function(){
        expect(instantiator.prototype.constructor).to.equal(instantiator);
      });
    });
  };

  return {
    ensure: function(instantiator){
      return {
        follows: _(follows).partial(instantiator)
      };
    }
  };
});
