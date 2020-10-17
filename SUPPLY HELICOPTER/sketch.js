var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3,box4,boxBody1,boxBody4;
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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	boxBody1 = Bodies.rectangle(width/2, height-45,width-600,10,{isStatic:true});
	World.add(world,boxBody1);
	box1 = createSprite(boxBody1.position.x,boxBody1.position.y, width-600,10);
	box1.shapeColor="red";
	box2 = createSprite((width/2)-105, height-100, width-780,120);
	box2.shapeColor="red";
	box3 = createSprite((width/2)+105, height-100, width-780,120);
	box3.shapeColor="red";
	boxBody4 = Bodies.rectangle(width/2,635,width-600,10,{isStatic:true});
	World.add(world,boxBody4);
	box4 = createSprite(boxBody4.position.x,boxBody4.position.y,width-650,10);
	box4.visible = false;
	box4.shapeColor="black";

  
}


function draw() {
	Engine.update(engine);
	
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  box1.x = boxBody1.position.x;
  box1.y = boxBody1.position.y;

  box4.x = boxBody4.position.x;
  box4.y = boxBody4.position.y;
  
  if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody, false);
	
  }
  
  drawSprites();
}


