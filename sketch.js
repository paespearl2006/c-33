const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var boy;
var boyImg;
var engine,world,edges;


function preload(){
  backgroundIMG=loadImage("snow3.jpg")
  boyImg=loadImage("boy.png");

}

function setup() {
createCanvas(1000,600);
engine=Engine.create();
world=engine.world;
boy=createSprite(900,450);
boy.addImage(boyImg);
boy.scale=0.5;
edges=createEdgeSprites();

for(var i=0; i<snowfall; i++){
  snowfall.push(new createsnowfall(random(0,400), random(0,400)));
}
}

function draw() {

    background(backgroundIMG); 
    if(keyCode===32&&boy.y>300){
  boy.velocityY=-5
    }
    boy.velocityY=boy.velocityY+1
    boy.collide(edges[3])

    //snowfall.velocityX=snowfall.velocityX+1
    //snowfall.velocityY=snowfall.velocityY+1
    snowfall.velocity=+2


    for(var i = 0; i<snowfall; i++){
      snowfall[i].display();
      snowfall[i].Position()
      
  }


     
  drawSprites();
}