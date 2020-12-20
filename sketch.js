const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var SudipEngine,SudipWorld
var ground;
var ball;


function setup() {
  createCanvas(800,400);

  SudipEngine=Engine.create();
  SudipWorld=SudipEngine.world;

  
  
  var options={
    isStatic:true


   }
  ground=Bodies.rectangle(400,380,800,20,options);
  World.add(SudipWorld,ground);
  console.log(ground)
  console.log(ground.type);
  var balloptions={
   restitution:1

  }
  ball=Bodies.circle(100,200,20,balloptions)
  World.add(SudipWorld,ball);
  
}

function draw() {
  background("yellow");  
  Engine.update(SudipEngine);
  rectMode(CENTER)
  var pos=ground.position;
  rect(pos.x,pos.y,800,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}