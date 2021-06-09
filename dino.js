// You can paste this into the chrome console at chrome://dino/
const game = Runner.instance_;

(function tick() {
  /* do not do anything if the game is not running */
  if (game.crashed || game.paused) {
    return requestAnimationFrame(tick);
  }

  let _window = window.Runner.instance_
  let obstacles = _window.horizon.obstacles;
  let tRex = _window.tRex;

  //The obstacle's distance i determined the dino jumps
  let jumpDistance = 110;
  

  //ensures a obstacles on canvas and the closest obj is within jump range.
  if( obstacles.length > 0 && obstacles[0].xPos <= jumpDistance){

      //the next obstacle coming towards tRex
      let obsType = obstacles[0].typeConfig.type;
      //the next obstacle height position
      let obsHeight = obstacles[0].yPos;

      if(obsType === "CACTUS_SMALL" || obsType === "CACTUS_LARGE"){
          tRex.startJump(300)

      }else if(obsType === "PTERODACTYL" && obsHeight > 50){
          tRex.startJump(300)
      }else if (obsType === "PTERODACTYL" && obsHeight <= 50){
        shouldDuck = true;
      }
  }

  requestAnimationFrame(tick);
}());

