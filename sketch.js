var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
  
  
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(packageBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}
// const Engine=Matter.Engine;
// const World=Matter.World;
// const Bodies=Matter.Bodies;
// var engine, world;
// var ground;
// var ball,ballIMG;
// var helicopter, helicopterIMG
// var wall1;
// var wall2;
// var wall3;


// function preload()
// {
// 	helicopterIMG=loadImage("helicopter.png");
// 	ballIMG=loadImage("package.png");
// }

// function setup() {
// 	createCanvas(800, 700);
// 	rectMode(CENTER);
// 	engine=Engine.create();
//   world=engine.world;
//   var ground_options={
//   isStatic: true }

//   engine = Engine.create();
//   world = engine.world;

// var ball_options={
// restitution: 1.0,
// isStatic: true
//  }

// 	wall1=createSprite(width/2, height-45, 200, 10);
// 	wall1.shapeColor="red";
// 	wall2=createSprite(500, height-70, 10, 80);
// 	wall2.shapeColor="red";
// 	wall3=createSprite(300, height-70, 10, 80);
// 	wall3.shapeColor="red";

// 	ball=createSprite(width/2, 200, 10,10, ball_options);
// 	ball.addImage(ballIMG);
// 	ball.scale=0.2;

	
// 	helicopter=createSprite(width/2, 200, 10,10);
// 	helicopter.addImage(helicopterIMG);
// 	helicopter.scale=0.6;

// 	ground=createSprite(width/2, height-35, width,10);
// 	ground.shapeColor=color(255);


// 	//Create a Ground
// 	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
// 	 World.add(world, ground);
	 
// 	 ball = Bodies.circle(width/2, 200, 5, {restitution:0.4, isStatic:true})
// 	 World.add(world, ball);

// 	 Engine.run(engine);
  
// }


// function draw() {
//   rectMode(CENTER);
//   background(0); 
//   Engine.update(engine);
//   rectMode(CENTER);
// //   rect(ground.position.x, ground.position.y, 400, 50);
//   drawSprites();
// }

// function keyPressed() {
//  if (keyCode === DOWN_ARROW) {
// 	ball.velocityY=7;    
//   }
// }