app.controller('GameController', function($scope, $log, $window, EnchantService) {

  // $log.debug($window.screen);

  var clock, block, layer;

  // Create a canvas to draw on
  layer = BLOCKS.layer({
    parentElement: document.getElementById("demo"),
    // height: 100,
    // width: 100
  });

  // Create a block
  block = BLOCKS.block();

  // Add a slice to the block
  block.addSlice({
    layer: layer,
    imageSrc: "images/sprites/coin.png", // Define sprite sheet location
    numberOfFrames: 10, // Define number of frames of animation
    loop: true
  });

  // Create a clock
  clock = BLOCKS.clock();

  // Update and render the block on each tick of the clock
  clock.addEventListener("tick", function () {
    block.update();
    if (block.dirty) { // Clear the layer if the block is dirty
      layer.clear();
    }
    block.render();
  });

  // Start the clock
  clock.start();

});
