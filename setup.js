require.config({
  baseUrl: '.',
  paths: {
    'underscore': 'lib/underscore',
    'mocha': 'lib/mocha',
    'chai': 'lib/chai',
    'skipper': 'lib/skipper',
    'testClassPattern': 'lib/testClassPattern'
  },
  shim:{
    'underscore':{
      'exports': '_'
    }
  }
});

require(['mocha', 'chai', 'skipper'], function(notMocha, chai, skipper){
  mocha.setup('bdd');

  skipper.setup(['stack.js','queue.js'], {
    'pseudoclassical': 'Pseudoclassical',
    'prototypal': 'Prototypal',
    'functional-shared': 'Functional (shared)',
    'functional': 'Functional'
  }, 'functional');

  window.expect = chai.expect;
});
