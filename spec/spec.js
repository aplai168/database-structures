require(['variant'], function(variant){
  variant.setup({
    'files': ['stack.js','queue.js'],
    'variants':{
      'pseudoclassical': 'Pseudoclassical',
      'prototypal': 'Prototypal',
      'functional-shared': 'Functional (shared)',
      'functional': 'Functional'
    },
    'default': 'functional'
  });
});
