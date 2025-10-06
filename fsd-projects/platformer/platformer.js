$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
 


    // TODO 2 - Create Platforms
createPlatform(200, 650, 150, 20, "red");
createPlatform(400, 550, 150, 20, "lime");
createPlatform(600, 450, 150, 20, "purple");
createPlatform(800, 350, 150, 20, "blue");
createPlatform(1000, 250, 150, 20, "pink");

    // TODO 3 - Create Collectables
createCollectable("kennedi", 1000, 120);
createCollectable("max", 200, 170, 0.5, 0.7);
createCollectable("steve", 1200, 50);

    
    // TODO 4 - Create Cannons
createCannon("top", 200, 500);
createCannon("right", 300, 3000);
createCannon("bottom", 300, 650);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
