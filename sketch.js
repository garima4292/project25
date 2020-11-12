
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var ground;
var tissue;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	log1 = new Log(600,580,170,170);
	//log2 = new Log(530,590,20,150);
	//log3 = new Log(670,590,20,150);

	ground = new Ground(400,680,800,20);

	tissue = new Ball(150,200,70);
}


function draw() {
  background("yellow");

  Engine.update(engine);
  
  //log2.display();
  //log3.display();
  ground.display();
  log1.display();
  tissue.display();
  
  
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Body.applyForce(tissue.body,tissue.body.position,{x:130,y:-140})
}
}