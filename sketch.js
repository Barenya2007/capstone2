var tree, treeImage, charc, CharcImage;
var door, doorImage;
var climber, climberImage;
var invisibleS;

var gameState= "Play";

var doorGroups, climberGroups, invisibleSgroups;


function preload(){
  treeImage= loadImage("code.png");
  CharcImage= loadImage("character.png");
  doorImage= loadImage("enemy.png");
  climberImage= loadImage("enemy.png");
}

function setup(){
  createCanvas(400, 400)
  tree= createSprite(200,200, 20,20);
  tree.addImage(treeImage);
  tree.scale=0.8;
  tree.velocityY=2;

  charc= createSprite(200,200,20,20);
  charc.addImage(CharcImage);
  charc.scale=0.1;
  
  
  doorGroups=createGroup()
  climberGroups=createGroup()
  invisibleSgroups=createGroup()
  
  
}


function draw(){
  
  if(gameState==="Play"){
  if(tree.y >300){
    tree.y=200
  }
  
  if(keyDown("space")){
    
    charc.velocityY=-2;
    
  }
  
  charc.velocityY=charc.velocityY+0.5;
  
  if(keyDown("right")){
    charc.x=charc.x+3;
  }
  
  if(keyDown("left")){
    charc.x=charc.x-3;
  }
  
  spawnDoor()
  
  if(charc.isTouching(invisibleSgroups)|| charc.y>400)
  {
    charc.destroy()
    gameState="end";
  }
    if(charc.isTouching(climberGroups)){
      charc.velocityY=0;
    }
  drawSprites()
}
  if(gameState==="end"){
    background("black");
    textSize(20);
    fill("yellow");
    text("Game Over",150,200);
  }
}

function spawnDoor(){
  
  if(frameCount%150==0){
  door= createSprite(Math.round(random(120,280)),10);
  door.addImage(doorImage);
  door.velocityY=2;
  door.scale=0.1;
  door.lifetime=200;
    
  climber= createSprite(door.x,35);
  climber.addImage(climberImage);
  climber.velocityY=2;
  climber.scale=0.1;
  climber.lifetime=200;
    
  invisibleS= createSprite(door.x, 40, 40,2);
  invisibleS.velocityY=2;
  invisibleS.lifetime=200;
    
  doorGroups.add(door)
  climberGroups.add(climber)
  invisibleSgroups.add(invisibleS)
  }
  
  
}








