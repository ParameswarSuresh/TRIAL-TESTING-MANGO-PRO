
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,130,30);
	mango3=new mango(1200,160,30);
	mango4=new mango(1050,100,30);
	mango5=new mango(1000,100,30);
	mango6=new mango(950,150,30);
	mango7=new mango(1100,150,30);
	mango8=new mango(1150,200,30);
	mango9=new mango(1200,250,30);
	mango10=new mango(1050,170,30);
	mango11=new mango(1000,230,30);
	mango12=new mango(1000,170,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new stone(220, 250);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  mouseDragged();
  mouseReleased();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();
  groundObject.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(Stone.body,{x:mouseX, y:mouseY})
}
function mouseReleased()
{
    stone.fly();
}


