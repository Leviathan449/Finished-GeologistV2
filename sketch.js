
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;

var hammer;
var rubber, stone;
//var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,670,800,30);
	//Create the Bodies Here.
	Hammer = new mallet(600,200,40,60);

	Stone = new rock(400,460, 30,30);

	Rubber = new bounce(200,50);

	//Iron = new ingot(300,100,45,45);
 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  Hammer.display();
  Stone.display();
  Rubber.display();
  //Iron.display();


  
  drawSprites();
 
}



