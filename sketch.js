var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1000, 900);


	Engine = engine.create();
	World = Engine.world;

	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	
	
	  ball = Bodies.circle(200,200,20,ball_options)
	  World.add(world,ball);
	 
	  
	  ellipseMode(RADIUS);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  Engine.update(engine);
  rect(pos.x, pos.y,this.w,this.h);
  

  drawSprites();
  keyPressed()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		 Matter.ball.applyForce(ball,{x:0,y:0},{x:0.03,y:0.03})
	}

}



