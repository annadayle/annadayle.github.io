// sierpinski triangle

let triangleVertices;
let numsOfTriangles = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  triangleVertices = [
    {x: width/2, y: 100},
    {x: 100, y: height-100},
    {x: width-100, y: height-100}
  ];
}

function draw() {
  background(220);
  sierpinski(triangleVertices, numsOfTriangles);
}

function mousePressed() {
  if (numsOfTriangles < 7) {
    numsOfTriangles++;
  }
}

function sierpinski(points, depth) {
  let theColors = ["blue", "red", "green", "white", "yellow", "pink", "orange", "black"];
  fill(theColors[depth]);
  noStroke();
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (depth > 0) {
    sierpinski([points[1], getMidPoint(points[0], points[1]), getMidPoint(points[1], points[2])], depth - 1);

    sierpinski([points[0], getMidPoint(points[0], points[1]), getMidPoint(points[0], points[2])], depth - 1);

    sierpinski([points[2], getMidPoint(points[0], points[2]), getMidPoint(points[1], points[2])], depth - 1);
  }
}

function getMidPoint(point1, point2) {
  let midX = (point1.x + point2.x)/2;
  let midY = (point1.y + point2.y)/2;
  return {x: midX, y: midY};
}