//tic tac toe

// You will be playing against the computer in this tic tac toe game. The computer will try to guess your moves and counter them, whether
// that be making the game a tie or winning by making it's own row. Complete as many rounds as you want

let grid = createEmptyGrid(3, 3);
let rows, cols, cellWidth, cellHeight;
let t = "Your score: "

function setup() {
  let myCanvas = createCanvas(windowWidth*0.8, windowHeight*0.8);
  myCanvas.position(windowWidth*0.1, windowHeight*0.1);
  
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width*0.8 / cols;
  cellHeight = height*0.8 / rows;

}

function draw() {
  background(220);
  displayGrid();
  displayText();
}

function mousePressed() {
   let x = Math.floor(mouseX / cellWidth);
   let y = Math.floor(mouseY / cellHeight);

   toggleCell(x, y); 
}

function toggleCell(x, y) {
  // check coordinates are in the array
  if (x >= 0 && x < cols && y >=0 && y < rows) {
    if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  }
}

function displayGrid() {
    for (let y=0; y<rows; y++) {
      for (let x=0; x<cols; x++) {
        if (grid[y][x] === 0) {
          fill("white");
        }
        if (grid[y][x] === 1) {
          fill("black");
        }
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
}

function displayText() {
  fill(50);
  text (t, windowWidth*0.5, windowHeight*0.5,);
}

function createEmptyGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}
