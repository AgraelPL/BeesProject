
var population;

var lifespan = 400;

var lifeP;

var count = 0;
var populationNumber = 0;

var target;

var maxforce = 0.5;
var frame;


var rx = 500;
var ry = 500;
var rw = 500;
var rh = 10;

function setup() {
  createCanvas(1000, 1000);
  population = new Population();
  lifeP = createP();
  lifeN = createP();
  lifeF = createP();
  
  target = createVector(width / 2, 100);
  
}

function draw() {
  background(0);
  
  population.run();
  frame = frameRate();
  lifeP.html(count);
  lifeN.html(populationNumber);
  lifeF.html(frame);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    populationNumber++;
    count = 0;
  }
  
  fill(255);


  
  //uruchomeienie przeszkody
  
  rectMode(CENTER);
  rect(rx, ry, rw, rh);

  rectMode(CENTER);
  rect(target.x, target.y, 50, 50);
  
  
}
