require.config({
  baseUrl: '.',
  paths: {
    'underscore': 'lib/underscore',
    'mocha': 'lib/mocha',
    'chai': 'lib/chai',
    'variant': 'lib/variant',
    'classPattern': 'lib/classPattern'
  },
  shim:{
    'underscore':{
      'exports': '_'
    }
  }
});

require(['mocha', 'chai', 'variant'], function(notMocha, chai, variant){
  mocha.setup('bdd');

  variant.setup(['stack.js','queue.js'], {
    'pseudoclassical': 'Pseudoclassical',
    'prototypal': 'Prototypal',
    'functional-shared': 'Functional (shared)',
    'functional': 'Functional'
  }, 'functional');

  window.expect = chai.expect;
});
