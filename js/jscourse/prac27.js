//Käytä seuraavaa Shape-luokkaa ja luo uusi luokka nimeltä Circle, 
//joka perii Shape-luokan. Circle-luokalla on ominaisuus nimeltä radius, 
//ja metodi getArea(). 
//GetArea() metodi laskee pinta-alan käyttäen seuraavaa kaavaa: 
//3,14159 * radius * radius. Se myös tulostaa pinta-alan konsolille. 
//Luo ohjelman lopussa uusi Circle-olio komennolla new Circle(0,0,2) 
//ja kutsu lopuksi getArea() -metodia tulostaaksesi pinta-alan konsolille.

class Shape {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }
  
    move(x, y) {
      this. x = x;
      this.y = y;
    }
  }

    class Circle extends Shape {
        constructor (x, y, radius) {
            super(x, y);
            this.radius = radius;
        }
        getArea() {
            let area = 3.14159 * this.radius * this.radius;
            console.log(area);
        }
    }   

    let circle = new Circle(0, 0, 2);
    circle.getArea();

    