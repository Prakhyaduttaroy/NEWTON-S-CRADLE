
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(400,500,50);
	bobObject2 = new Bob(350,500,50);
	bobObject3 = new Bob(300,500,50);
	bobObject4 = new Bob(450,500,50);
	bobObject5 = new Bob(500,500,50);
	roof = new Roof(400,300,300,20)


	//Create the Bodies Here.
rope1 = new Rope(bobObject1.body, roof.body, 0,0);
rope2 = new Rope(bobObject2.body, roof.body, -50,0);
rope3 = new Rope(bobObject3.body, roof.body, -100,0);
rope4 = new Rope(bobObject4.body, roof.body, 50,0);
rope5 = new Rope(bobObject5.body, roof.body, 100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:85,y:-85});
    
  	}
}


