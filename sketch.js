
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,dustin1,dustbin2,dustbin3;
function preload(){
	 paperobj = loadImage("images/paper.png")
}

function setup() {
  createCanvas(1000,200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,165,1000,10);
    paper = new Paper(50,150);
    dustbin1 = new Dustbin(700,100,20,100);
    dustbin2 = new Dustbin(900,100,20,100);
    dustbin3 = new Dustbin(800,150,200,20);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
   if(keyCode === UP_ARROW){
     paper.fly();
   }
}



