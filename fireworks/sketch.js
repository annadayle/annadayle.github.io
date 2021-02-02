// Fireworks OOP demo (OOP = object oriented program)

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let i=fireworks.length-1; i>=0; i--) {
    if (fireworks[i].isVis()) {
      fireworks[i].move();
      fireworks[i].display();
    }
    else {
      fireworks.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i=0; i<100; i++) {
    let someParticle = new Particle(mouseX, mouseY, random(-5, 5), random(-5, 5), 255, 0, 0, 255);
    fireworks.push(someParticle);
  }
}

class Particle {
  constructor(x, y, dx, dy, r, g, b, a) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.diameter = 20;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.a -= 2.5;
  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  isVis() {
    return this.a > 0;
  }
}