var startNight;
var star;
 var fairyAnimation,fairy;


function preload(){
  starNightImage=loadImage("images/starnight.png");
  starImage=loadImage("images/star.png");
  fairyAnimation=loadAnimation("images/fairy1.png","images/fairy2.png");
  fairyImage=loadImage("images/fairy.png");
}

function setup() {
  createCanvas(800, 750);
  
  //starNight=createSprite(400,375);
  //starNight.addImage("STARNIGHT",starNightImage);

  fairy=createSprite(200,650,50,50);
  fairy.addAnimation("FAIRY",fairyAnimation);
  fairy.scale=0.3;
  //fairy.debug=true;
  fairy.setCollider("rectangle",50,0,900,700)

  star=createSprite(600,150,20,20);
  star.addImage("STAR",starImage);
  star.scale=0.3;
  //star.debug=true;

}


function draw() {
 
  background(starNightImage)
    fairy.x=World.mouseX;
    fairy.y=World.mouseY; 

    
  if(keyDown("space")){
    star.velocityY=2.5;
  }

  if(star.isTouching(fairy)){
    star.velocityY=0;
  }

  drawSprites();

}
