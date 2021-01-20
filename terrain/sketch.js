// perlin noise

let rectHeights;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeights = generateHeights();
  console.log(rectHeights);
}

function draw() {
  background(220);
  

  // rect(0, height-rectHeight, 50, rectHeight);
  
}

function generateHeights() {
  let theHeights = [];
  for (let i=0; i<5000; i++) {
    let rectHeight = noise(i*0.01) * height;
    theHeights.push(rectHeight);
  }
  return theHeights;
}
