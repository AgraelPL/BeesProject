
function Rocket(dna) {
    // Physics of rocket at current instance
    this.pos = createVector(width / 2, height - 100);
    this.vel = createVector();
    this.acc = createVector();
    // Checkes rocket has reached target
    this.completed = false;
    // Checks if rocket had crashed
    this.crashed = false;
    // Gives a rocket dna
    if (dna) {
      this.dna = dna;
    } else {
      this.dna = new DNA();
    }
    this.fitness = 0;
  
    // Object can recieve force and add to acceleration
    this.applyForce = function(force) {
      this.acc.add(force);
    }
    // Calulates fitness of rocket
    this.calcFitness = function() {
      // Takes distance to target
      var d = dist(this.pos.x, this.pos.y, target.x, target.y);
  
      // Maps range of fitness
      this.fitness = map(d, 0, width, width, 0);
      // If rocket gets to target increase fitness of rocket
      if (this.completed) {
        this.fitness *= 10;
      }
      // If rocket does not get to target decrease fitness
      if (this.crashed) {
        this.fitness /= 10;
      }
  
    }
    // Updates state of rocket
    this.update = function() {
      // Checks distance from rocket to target
      var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      // If distance less than 10 pixels, then it has reached target
      if (d < 10) {
        this.completed = true;
        this.pos = target.copy();
      }
      // Rocket hit the barrier
      if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
        this.crashed = true;
      }
      // Rocket has hit left or right of window
      if (this.pos.x > width || this.pos.x < 0) {
        this.crashed = true;
      }
      // Rocket has hit top or bottom of window
      if (this.pos.y > height || this.pos.y < 0) {
        this.crashed = true;
      }
  
  
      
      this.applyForce(this.dna.genes[count]);
      
      if (!this.completed && !this.crashed) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.vel.limit(4);
      }
    }
   
    this.show = function() {
      
      push();      
      noStroke();      
      translate(this.pos.x, this.pos.y);      
      fill(255,255,100);
      ellipseMode(CENTER);
      ellipse(0, 0, 15, 15);
      pop();
    }
  
  }