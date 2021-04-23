const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  rock1 = new Rock(1100,200,100,100);
  boggie1 = new Boggie(100,200,100,100)
  boggie2 = new Boggie(300,200,100,100)
  chain1 = new Chain(boggie1.body,boggie2.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  rock1.show();
  boggie1.show();
  boggie2.show();
  chain1.show();

  var collision = Matter.SAT.collides(boggie2.body,rock1.body);
  if(collision.collided){
    flag=1;
  }
  if(flag ===1){
    textSize(30);
    text("CRASH",500,200);
  }
}


 function keyPressed(){
   if (keyCode === 39){
    Matter.Body.applyForce(boggie2.body,{x:boggie2.body.position.x,y:boggie2.body.position.y}, {x:0.5,y:0});
   }
 }
  
