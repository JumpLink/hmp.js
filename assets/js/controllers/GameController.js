app.controller('GameController', function($scope, $log, $window, EnchantService) {

  // $log.debug($window.screen);

  // Game instance allready exists?
  if(enchant.Core.instance == null) {

  } else {
    $log.debug(enchant.Core.instance);
    EnchantService.reset(enchant.Core.instance);

  }


  enchant(); // initialize
  var game = new Core($window.screen.width, $window.screen.height); // game stage
  game.preload('images/sprites/chara1.png'); // preload image
  game.fps = 20;



  game.onload = function(){
    var bear = new Sprite(32, 32);
    bear.image = game.assets['images/sprites/chara1.png'];
    game.rootScene.addChild(bear);
    bear.frame = [6, 6, 7, 7];   // select sprite frame

    bear.tl.moveBy(288, 0, 90)   // move right
    .scaleTo(-1, 1, 10)      // turn left
    .moveBy(-288, 0, 90)     // move left
    .scaleTo(1, 1, 10)       // turn right
    .loop();                 // loop it
  };

  game.start(); // start your game!

});
