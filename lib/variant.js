define(['underscore', 'mocha'], function(){
  var current = document.location.search.replace(/\?variant=/,'');

  /* BEGIN PUBLIC INTERFACE */

  var variant = function(){
    // setup
    if(arguments.length == 2){
      run.apply(null, arguments);

    // requirejs id for file
    } else if(arguments.length == 1){
      return path(arguments[0]);

    // selected variant
    } else {
      return current;
    }
  };

  variant.is = function(dir){
    return current == dir;
  };

  variant.done = function(){
    !--variant.waitingOn && mocha.run();
  };

  /* END PUBLIC INTERFACE */

  var run = function(srcs, dirs){
    if(!(srcs && dirs)){
      throw new Error("variant.run(srcs, dirs) requires both `srcs` and `dirs`.");
    }

    setDefaultVariant(dirs);
    makeLinks(dirs);
    variant.waitingOn = srcs.length;
    require(srcs.map(specFromSrc));
  };

  var specFromSrc = function(file){
    return 'spec/' + file.replace(/.js$/,'') + 'Spec.js';
  }

  var setDefaultVariant = function(dirs){
    if (!_(dirs).contains(current)){
      window.location = '?variant=' + dirs[0];
    }
  }

  var makeLinks = function(dirs){
    var container = document.createElement('div');
    document.body.insertAdjacentElement('afterBegin', container);
    dirs.forEach(function(dir){
      var a = document.createElement('a');
      a.href = '?variant=' + dir;
      a.textContent = dir;
      a.style.cssText = 'padding: 10px; font-size:.8em;';
      if(dir == current){
        a.style.cssText += "background-color: #6699cc; color:white;"
      }
      container.appendChild(a);
    });
  };

  var path = function(name){
    return 'src/' + current + '/' + name;
  };

  return variant;
});
