const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var FLOORGANG;
var divisionHeight = 300;

var plink;


function setup() {

  engine = Engine.create();
  world = engine.world;
  
  createCanvas(480, 800);

  FLOORGANG = new Ground(240, 790, 480, 20);



  Engine.run(engine);

}

var particles = [];
var plinkos = [];
var divisions = [];

function draw() {

  background(0);  
  drawSprites();

  for(var k = 0; k <= width; k = k + 80){

    divisions.push(new Wall(k, height - divisionHeight/2, 10, divisionHeight));

  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
    
  }

  for(var j = 40; j <= width; j = j + 50){

    plinkos.push(new Plinko(j, 75));

  }

  for(var j = 15; j <= width - 10; j = j + 50){

    plinkos.push(new Plinko(j, 175));
    
  }

  for(var j = 40; j <= width - 20; j = j + 50){

    plinkos.push(new Plinko(j, 275));
    
  }

  for(var j = 15; j <= width - 30; j = j + 50){

    plinkos.push(new Plinko(j, 375));
    
  }

  for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
    
  }

  for (var f = 0; f < particles.length; f++) {
     
    particles[f].display();
    
  }

  if(frameCount % 60 === 0){

    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));

  }

  FLOORGANG.display();



}