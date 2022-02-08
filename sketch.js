var player;
var circle;
function setup() {
  createCanvas(1920, 565);
  background(51);
  

}

function draw() 



{

  text("PRESS ENTER KEY FOR RANDOM COLORS!", 520, 310)
  

  
  



  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }
   

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("lightBlue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightGreen");
  }

  if (keyIsDown(13)) 
  {
    background(rgb(random(0,255), random(0, 255), random(0, 255)));
  }
  


  
  drawSprites();
}

