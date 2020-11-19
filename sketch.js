
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,ground1,slingshot1;
var stone1,rope1,mango1,mango2,mango3,mango4,mango5;
var gameState;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(900,400,500,500);
	stone1 = new Stone(400,25,25);
	ground1 = new Ground(600,670,2400,50);
	rope1 = new Rope(stone1.body,{x: 400, y: 25});
	mango1 = new Mango(800,350,30);
	mango2 = new Mango(900,350,45,45);
	mango3 = new Mango(850,275,32,32);
	mango4 = new Mango(810,211,51,51);
	mango5 = new Mango(1010,380,30,30);

}


function draw() {
	rectMode(CENTER);
	background("lightgray");

	Engine.update(engine);

	tree1.display();
	stone1.display();
	ground1.display();
	rope1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	detectCollision(stone1,mango1);
	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);
	detectCollision(stone1,mango4);
	detectCollision(stone1,mango5);

	drawSprites();
}


function mouseDragged(){
    // if (gameState!=="launched"){
        Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
    // }
}


function mouseReleased(){
    rope1.fly();
    // gameState = "launched";
}


function detectCollision(stone,mango){
	var mangoBodyPosition = mango.body.position;
	var stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= mango.r + stone.r){
		Matter.Body.setStatic(mango.body,false);	
	}
}
