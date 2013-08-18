// todo: get mocha to export
define(['lib/chai.js', 'lib/mocha.js'], function(chai){
  mocha.setup('bdd');
  window.expect = chai.expect;
});
