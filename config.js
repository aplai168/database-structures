var require ={
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
  },
  deps: ['mocha', 'chai'],
  callback: function(notMocha, chai){
    mocha.setup('bdd');
    window.expect = chai.expect;
  }
};
