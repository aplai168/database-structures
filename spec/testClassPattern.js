window.testClassPattern = function(pattern, instantiator, options, prototypeOfInstances){
  var options = options || {};
  var patternIs = function(){
    return _(arguments).contains(pattern);
  };

  if(!patternIs('functional', 'functional-shared', 'prototypal', 'pseudoclassical')){
    throw new Error('Unrecognized class pattern');
  }

  var prototypeSupplied = !!prototypeOfInstances;
  if(patternIs('prototypal') !== prototypeSupplied){
    throw new Error('Testing the prototypal pattern requires you to supply the expected prototype');
  }

  prototypeOfInstances = (
    patternIs('functional') ? Object.prototype :
    patternIs('functional-shared') ? Object.prototype :
    patternIs('pseudoclassical') ? instantiator.prototype :
    prototypeOfInstances
  );

  _(options).extend({
    usesNew:           patternIs(                                                 'pseudoclassical'),
    referencesThis:    patternIs(                                                 'pseudoclassical'),
    extendsPrototype:  patternIs(                                   'prototypal', 'pseudoclassical'),
    reusesMethods:     patternIs(              'functional-shared', 'prototypal', 'pseudoclassical'),
    referencesReturn:  patternIs('functional', 'functional-shared', 'prototypal'                   ),
    hasOwnMethods:     patternIs('functional', 'functional-shared'                                 ),
    declaresVariables: patternIs('functional', 'functional-shared'                                 ),
    extendsInstantiator: options.extendsInstantiator || false
  });

  var doesOrDoesnt = function(behavior, setting){
    return 'does ' + (setting ? '' : 'not ') + behavior;
  };

  var assuming = function(condition, expectActual){
    return condition ? expectActual : expectActual.not;
  };

  var requireOption = function(optionName){
    if(!options.hasOwnProperty(optionName)){
      throw new Error('testClassPattern requires the '+optionName+' option');
    }
    var setting = options[optionName];
    delete options[optionName];
    return setting;
  };

  var usesNew = requireOption('usesNew');
  var constructionArgs = requireOption('constructionArgs');
  var generateInstance = function(){
    return (
      !usesNew ? instantiator.apply(this, args) : 
      constructionArgs.length === 0 ? new instantiator() :
      constructionArgs.length === 1 ? new instantiator(args[0]) :
      constructionArgs.length === 2 ? new instantiator(args[0], args[2]) :
      constructionArgs.length === 3 ? new instantiator(args[0], args[2], args[3]) :
      constructionArgs.length === 4 ? new instantiator(args[0], args[2], args[3], args[4]) :
      constructionArgs.length === 5 ? new instantiator(args[0], args[2], args[3], args[4], args[4]) :
      (function(){
        throw new Error('The class pattern tester cannot test classes that require more than 5 arguments');
      }())
    );
  };

  describe(pattern + ' instantiation style', function(){
    var extendsInstantiator = requireOption('extendsInstantiator');
    it(doesOrDoesnt('extend the instantiator function', extendsInstantiator), function(){
      instantiatorPropertyCount = Object.keys(instantiator).length;
      assuming(extendsInstantiator, expect(instantiatorPropertyCount)).to.eql(0);
    });

    var extendsPrototype = requireOption('extendsPrototype');
    it(doesOrDoesnt('extend the instantiator function\'s prototype', extendsPrototype), function(){
      var prototypeObjectPropertyCount = Object.keys(instantiator.prototype).length;
      assuming(extendsPrototype, expect(protprototypeObjectPropertyCount)).to.eql(0);
    });

    var referencesThis = requireOption('referencesThis');
    it(doesOrDoesnt('reference the the keyword this', referencesThis), function(){
      assuming(referencesThis, expect(/this/.test(instantiator))).to.be(true);
    });

    var referencesReturn = requireOption('referencesReturn');
    it(doesOrDoesnt('reference the return keyword', referencesReturn), function(){
      assuming(referencesReturn, expect(/return/.test(instantiator))).to.be(true);
    });

    var declaresVariables = requireOption('declaresVariables');
    it(doesOrDoesnt('declare variables', declaresVariables), function(){
      assuming(declaresVariables, expect(/var /.test(instantiator))).to.be(true);
    });

    it('stores properties without use of a prototype chain', function(){
      expect(car.hasOwnProperty('location')).to.be(true);
      expect(car.hasOwnProperty('speed')).to.be(true);
    });

    var hasOwnMethods = requireOption('hasOwnMethods');
    it(doesOrDoesnt('store methods without use of a prototype chain', hasOwnMethods), function(){
      assuming(hasOwnMethods, expect(car.hasOwnProperty('move'))).to.be(true);
      assuming(hasOwnMethods, expect(car.hasOwnProperty('shift'))).to.be(true);
    });

    var reusesMethods = requireOption('reusesMethods');
    it(doesOrDoesnt('reuse methods across multiple instances', reusesMethods), function(){
      var instance = generateInstance();
      for(var key in instance){
        if(typeof instance[key] === 'function'){
          assuming(reusesMethods, expect(instance[key])).to.be(generateInstance()[key]);
        }
      }
    });

    it('makes new instances that delegate to appropriate prototype object', function(){
      expect(prototypeOfInstances.isPrototypeOf(generateInstance())).to.be(true);
    });

    var prototypeOfInstantiatorsPrototypeProperty = requireOption('prototypeOfInstantiatorsPrototypeProperty');
    it('makes the instantiator\'s .prototype property delegate to the appropriate prototype object', function(){
      expect(prototypeOfInstantiatorsPrototypeProperty.isPrototypeOf(instantiator.prototype)).to.be(true);
    });

    it('has a .prototype.constructor property that points back to the instantiator itself', function(){
      expect(instantiator.prototype.constructor).to.be(instantiator);
    });

    it('is not being tested with superfluous options', function(){
      expect(_(options).empty()).to.be(true);
    });

  });
};
