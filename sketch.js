const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;



var wall1,wall2,mainwall,gate,top1,top2;



function setup() {
 
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  gate=new Rect(400,300,125,100);
 
  wall1=new Rect4(100,240,100,350);
  wall2=new Rect3(700,240,100,350);
  fill(255);
  
  mainwall= new Rect2(400,200,550,300);
  

}

function draw() {
  background(0,0,255);  
  Engine.update(engine);

  mainwall.display();
  gate.display();
  wall1.display();
  wall2.display();
  push();
  fill("black");
  triangle(50,70,100,10,150,70);
  triangle(650,70,700,10,750,70);
  line(100,50,100,400);
  line(700,50,700,400);
  pop();
  

  for (var i=100;i<400;i=i+10){
    line(50,i,150,i);
  }

  for (var i=100;i<400;i=i+10){
    line(650,i,750,i);
  }
  

}