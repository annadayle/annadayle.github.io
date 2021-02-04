// bubble OOP demo

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(spawnBubble, 500); //spawns bubbles ever half second
}

function draw() {
  background(220);
  for (i=theBubbles.length-1; i>=0; i--) {
    if (theBubbles[i].isPopped) {
      theBubbles.splice(i, 1);
    }
    else {
      theBubbles[i].move();
      theBubbles[i].display();
    } 
  }
}

function spawnBubble() {
  let someBubble = new Bubble();
  theBubbles.push(someBubble);
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height + 100;
    this.dx = 0;
    this.dy = -3;
    this.radius = random(20, 40);
    this.theta = 0;
    this.isAlive = true;
    this.whenDead = 0;
    this.waitTime = 1000;
    this.isPopped = false;
  }

  move() {
    if (this.y - this.radius > 0) {
      this.x += this.dx;
      this.y += this.dy;

      this.dx = map(noise(this.theta), 0, 1, -5, 5); //go anywhere from -5 to 5
      this.theta += 0.02;
    }
    //when bubble hits the top
    else if(this.isAlive) {
      this.isAlive = false;
      this.whenDead = millis();
    }
    //when stuck on top
    else {
      if (millis() > this.whenDead + this.waitTime) {
        this.isPopped = true;
      }
    } 
  }

  display() {
   if (!this.isPopped) {
    noStroke();
    fill("lightPink");
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
   }   
  }
}