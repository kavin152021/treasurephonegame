var PLAY=1;
var END=0;
var gameState=PLAY;
var gameover,endImg;
var path,boy,cash,diamonds,jwellery,sword,bg;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,bgImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,bgG;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  bgImg=loadImage("bg.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth, windowHeight);
// Moving background
path=createSprite(width/2,height,width,2);
path.addImage(pathImg);
path.y = height/2  
path.velocityY = 4;


//creating boy running
boy = createSprite(70,height-70,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
gameover = createSprite(width/2,height/2);
gameover.addAnimation("SahilRunning",endImg);
gameover.scale=0.8;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
bgG=new Group();  

  boy.setCollider("circle",0,0,400);
  gameover.setCollider("rectangle",0,0,850,650)}

function draw() {

  background(0);
  
  if(gameState===PLAY){
    
    gameover.visible=false;
    
      boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
    
    
  }

  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createbg();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+200;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gameState=END;
        boy.changeAnimation("SahilRunning",endImg);
    }else{
      if(bgG.isTouching(boy)) {
        bgG.destroyEach();
        gameState=END;
  }
    }
      
  if(gameState===END){
    
    gameover.visible=true;
    boy.visible=false;
    
    path.velocityY = 0;
    
    cashG.destroyEach();
    cashG.setVelocityEach(0);
    diamondsG.destroyEach();
    diamondsG.setVelocityEach(0);
    jwelleryG.destroyEach();
    jwelleryG.setVelocityEach(0);
    swordGroup.destroyEach();
    swordGroup.setVelocityEach(0);
    bgG.destroyEach();
    bgG.setVelocityEach(0);
    
    if(mousePressedOver(gameover)) {
      reset();
    }
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(width-20),height-300, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(width-20),height-300, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(width-20),height-300, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(width-20),height-300, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

function createbg() {
  if (World.frameCount % 80 == 0) {
  var bg = createSprite(Math.round(random(width-20),height-300, 10, 10));
  bg.addImage(bgImg);
  bg.scale=0.2;
  bg.velocityY = 3;
  bg.lifetime = 150;
  bgG.add(bg);
  }
}

function reset(){
  gameState = PLAY;
  gameover.visible = false;
  boy.visible=true;
  
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
    bgG.destroyEach();
  
  boy.changeAnimation("SahilRunning",boyImg);
  path.velocityY=5;
 
  
  treasureCollection= 0;
  
}}