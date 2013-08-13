define(['underscore'], function(){
  var variant = {};
  variant.current = document.location.search.replace(/\?variant=/,'');

  variant.pathFromFile = function(file){
      return 'src/' + variant.current + '/' + file;
  };

  variant.is = function(dir){
    return variant.current == dir;
  };

  variant.setup = function(files, sourceDirs, defaultDir){

    // default selection
    var keys = _(sourceDirs).keys();
    if (!_(keys).contains(variant.current)){
      window.location = '?variant=' + (defaultDir || keys[0]);
    }

    makeLinks(sourceDirs);
    var specFromFile = function(file){
      return 'spec/' + file.replace(/.js$/,'') + 'Spec.js';
    }

    var srcs = files.map(variant.pathFromFile);
    var specs = files.map(specFromFile);
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
