var blue,white,pink,red,yellow,black;
var mouse;



function setup(){
  createCanvas(1280,610);

  blue = createSprite(106,534,213.33,150);
  blue.shapeColor = "blue";

  white = createSprite(319.33,534,213.33,150);
  white.shapeColor = "white";

  pink = createSprite(532.66,534,213.33,150);
  pink.shapeColor = "pink";

  red = createSprite(745.99,534,213.33,150);
  red.shapeColor = "red";

  yellow = createSprite(959.32,534,213.33,150);
  yellow.shapeColor = "yellow";

  black = createSprite(1172.65,534,213.33,150);
  black.shapeColor = "black";

  mouse = createSprite(200,200,10,10)
  mouse.visible = false;
  
  
}


function draw(){
 background("green");

 mouse.x = mouseX;
 mouse.y = mouseY;

 if(mouse.isTouching(blue)){
   background("blue")
 }
 if(mouse.isTouching(white)){
  background("white")
 }
 if(mouse.isTouching(pink)){
  background("pink")
 }
 if(mouse.isTouching(red)){
  background("red")
 }
 if(mouse.isTouching(yellow)){
  background("yellow")
 }
 if(mouse.isTouching(black)){
  background("black")
 } 

 
 
  drawSprites();
}