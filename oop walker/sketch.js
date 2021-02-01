// oop walker

let haight;
let dayle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  haight = new Walker(width/2, height/2, "purple");
  dayle = new Walker(100, 100, "green");
  background("black");
}

function draw() {
  haight.move();
  dayle.move();
  haight.display();
  dayle.display();
}

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 3, 10);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.x += this.speed;
    }
    else if (choice < 50) {
      this.x -= this.speed;
    }
    else if (choice < 75) {
      this.y += this.speed;
    }
    else {
      this.y -= this.speed;
    }
  }
}