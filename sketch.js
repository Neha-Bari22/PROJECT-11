var Runner, Runner_running;
var pathImage, path, invisibleBoundaries;

function preload(){
  
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");

  pathImage = loadImage("path.png");

 
}

function setup(){
  createCanvas(400,400);


 //Moving background
 path = createSprite(200,100);
 path.velocityY = 4;
 path.addImage(pathImage);
 path.scale = 1.2;
 path.x = height/2;
 

 Runner = createSprite(200,350,50,50);
 Runner.addAnimation("running", Runner_running);
 Runner.scale = 0.09;
 
 
 invisibleBoundaries1 = createSprite(50,200,10,400);
 invisibleBoundaries2 = createSprite(360,200,10,400); 
 invisibleBoundaries1.visible = false;
 invisibleBoundaries2.visible = false;

}

function draw()
 {
    background(200);

 Runner.x = World.mouseX;

 //code to reset the background
 if (path.y > 400)
 {
   path.y = height/2;
 }
 Runner.collide(invisibleBoundaries1);
 Runner.collide(invisibleBoundaries2);

 drawSprites();
  
}
