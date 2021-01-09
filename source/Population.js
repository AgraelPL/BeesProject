// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

function Population() {
    //tablica bees
    this.bees = [];
    // wielkosc populacji
    this.popsize = 1000;
    
    this.matingpool = [];
  
    // dodanie bee do tablicy
    for (var i = 0; i < this.popsize; i++) {
      this.bees[i] = new Bee();
    }
  
    this.evaluate = function() {
  
      var maxfit = 0;
      // obliczanie fitness dla kazdej bee
      for (var i = 0; i < this.popsize; i++) {
        
        this.bees[i].calcFitness();
        
        if (this.bees[i].fitness > maxfit) {
          maxfit = this.bees[i].fitness;
        }
      }
      // Normalizacja
      for (var i = 0; i < this.popsize; i++) {
        this.bees[i].fitness /= maxfit;
      }
  
      this.matingpool = [];
      // skalowanie fitness od 0 do 100
      
      for (var i = 0; i < this.popsize; i++) {
        var n = this.bees[i].fitness * 100;
        for (var j = 0; j < n; j++) {
          this.matingpool.push(this.bees[i]);
        }
      }
    }
    // wybieranie genow dla kolejnej kazdej bee w nastepnej populacji
    this.selection = function() {
      var newBees = [];
      for (var i = 0; i < this.bees.length; i++) {
        // wybieranie losowego dna
        var parentA = random(this.matingpool).dna;
        var parentB = random(this.matingpool).dna;
        // tworzenie bee z losowym dna
        var child = parentA.crossover(parentB);
        child.mutation();
        
        newBees[i] = new Bee(child);
      }
      
      this.bees = newBees;
    }
  
    // wyswietlenie nowych bee i update dna 
    this.run = function() {
      for (var i = 0; i < this.popsize; i++) {
        this.bees[i].update();
        // wyswietlenie bee na ekranie
        this.bees[i].show();
      }
    }
  }
  