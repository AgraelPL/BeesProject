

function DNA(genes) {
    
    if (genes) {
      this.genes = genes;
    }
    // jezeli nie ma dna to stwórz losowe
    else {
      this.genes = [];
      for (var i = 0; i < lifespan; i++) {
        // random vector
        this.genes[i] = p5.Vector.random2D();
        // maksymalna predkosc dla vectora
        this.genes[i].setMag(maxforce);
      }
    }
    // laczenie dwoch losowych dna 
    this.crossover = function(partner) {
      var newgenes = [];
      // Picks random midpoint
      var mid = floor(random(this.genes.length));
      for (var i = 0; i < this.genes.length; i++) {
        // 
        if (i > mid) {
          newgenes[i] = this.genes[i];
        }
        // 
        else {
          newgenes[i] = partner.genes[i];
        }
      }
      //  zwrot nowego dna jako tablicy vectorow
      return new DNA(newgenes);
    }
  
    // dodanie mutacji do tablicy
    this.mutation = function() {
      for (var i = 0; i < this.genes.length; i++) {
        
        if (random(1) < 0.1) {
          this.genes[i] = p5.Vector.random2D();
          this.genes[i].setMag(maxforce);
        }
      }
    }
  
  }