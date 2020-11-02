
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob=new Bob(30,250,60)
	bob2=new Bob(80,250,60)
	bob3=new Bob(130,250,60)
	bob4=new Bob(180,250,60)
	bob5=new Bob(330,250,60)

	roof=new Roof(300,50,20)

	rope=new Rope(bob.body,roof.body)
	rope2=new Rope(bob2.body,roof.body)
	rope3=new Rope(bob3.body,roof.body)
	rope4=new Rope(bob4.body,roof.body)
	rope5=new Rope(bob5.body,roof.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

roof.display();

rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



