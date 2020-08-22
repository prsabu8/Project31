const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,750);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
  //createSprite(400, 200, 50, 50);

  ground = new Ground(800,height,480,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


 
}

function draw() {
  background("black"); 
  //Engine.update(engine);

  ground.display(); 


  if (frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }


  for (var j = 0; j < plinkos.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    particles[k].display();
  }




  drawSprites();
}