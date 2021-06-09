// You can paste this into the chrome console at chrome://dino/
const game = Runner.instance_;

(function tick() {
  /* do not do anything if the game is not running */
  if (game.crashed || game.paused) {
    return requestAnimationFrame(tick);
  }

    // Key into the 'game' object to find the necessary data
    let _window = window.Runner.instance_
    let obstacles = _window.horizon.obstacles;
    let tRex = _window.tRex;
    let jumpDistance = 110;
    let _currentSpeed = _window.currentSpeed;

    if(_currentSpeed > 9){
        jumpDistance+=10
    }
    // console.log(jumpDistance)
    //ensures a obstacles on canvas and the closest obj is within jump range.
    if( obstacles.length > 0 && obstacles[0].xPos <= jumpDistance){
        let obsType = obstacles[0].typeConfig.type;
        // let obsHeight = obstacles[0].dimensions.HEIGHT;
        let obsHeight = obstacles[0].yPos;
        if(obsType === "CACTUS_SMALL" || obsType === "CACTUS_LARGE"){
            tRex.startJump(30)
        }else if(obsType === "PTERODACTYL" && obsHeight > 50){
            tRex.startJump(30)
        }
    }
// obsType === "PTERODACTYL" && 

	/*
		Add your code here to make the tRex jump to avoid any obstacles 
		 
		Hint: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
		The up arrow key or spacebar is a good key to automate
	*/


  requestAnimationFrame(tick);
}());

