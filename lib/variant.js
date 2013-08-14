define(['underscore'], function(){
  var variant = {};
  variant.current = document.location.search.replace(/\?variant=/,'');

  variant.pathFromFile = function(file){
      return 'src/' + variant.current + '/' + file;
  };

  variant.is = function(dir){
    return variant.current == dir;
  };

  variant.setup = function(config){
    if(!('files' in config && 'variants' in config)){
      throw new Error("Variant.setup(config) requires config to contain an array of files and a mapping of directory/name pairs.");
    }

    // default selection
    var keys = _(config.variants).keys();
    if (!_(keys).contains(variant.current)){
      window.location = '?variant=' + (config.default || keys[0]);
    }

    makeLinks(config.variants);
    var specFromFile = function(file){
      return 'spec/' + file.replace(/.js$/,'') + 'Spec.js';
    }

    var srcs = config.files.map(variant.pathFromFile);
    var specs = config.files.map(specFromFile);
    require(srcs.concat(specs), mocha.run);
  };

  var makeLinks = function(sourceDirs){
    for(dir in sourceDirs){
      var a = document.createElement('a');
      a.href = '?variant=' + dir;
      a.textContent = sourceDirs[dir];
      a.style.cssText = 'padding: 10px; font-size:.8em;';
      if(dir == variant.current){
        a.style.cssText += "background-color: #6699cc; color:white;"
      }
      document.body.insertBefore(a, document.body.childNodes[0]);
    }
  };
  return variant;
});
