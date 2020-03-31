const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var chain;


 function setup()   {
     var canvas = createCanvas(400,400);
     engine = Engine.create();
     world = engine.world;

     ground = new Ground(200,50,70,10);
     ball = new Ball(350,350,50);
     chain = new Chain(ground,ball);

 }

 function draw()    {
     background(255);
     if(keyIsDown("space"))   {
        ball.body.position.x = mouseX;
        ball.body.position.y = mouseY;
     }
     else if(keyIsDown("enter")) {
         ball.body.position.x = 200;
         ball.body.position.y = 200;
      }
     Engine.update(engine);

     ground.display();
     ball.display();
     chain.display();
 }