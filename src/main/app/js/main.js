require.config( {
    paths : {
    }
});

define('main', ['service1', 'service2'], function(){
  console.log('Main app...');
  
  return 'main def';
});

require(['main'], function(main){
  console.log('bootstraped...');
});
