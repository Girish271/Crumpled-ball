
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var dustbin;


function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ball= new Ball(200,650,20);
	dustbin=new Dustbin(1000,650,100,20)
	ground = new Ground(400,670,1500,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  dustbin.display();
  ground.display();
  ball.display();
  
  
  
  drawSprites();
 
}
function keyPressed(){
 if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
 }
}



