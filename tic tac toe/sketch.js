//tic tac toe

// You will be playing against the computer in this tic tac toe game. The computer will try to guess your moves and counter them, whether
// that be making the game a tie or winning by making it's own row. Complete as many rounds as you want

const ROWS = 3
const COLS = 3
let grid, cellWidth, cellHeight;
let s = 0;
let t = "Your score: ";

function setup() {
  let myCanvas = createCanvas(windowWidth*0.8, windowHeight*0.8);
  myCanvas.position(windowWidth*0.1, windowHeight*0.1);
  
  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width*0.8 / COLS;
  cellHeight = height*0.8 / ROWS;

}

function draw() {
  background(200);
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
  if (x >= 0 && x < COLS && y >=0 && y < ROWS) {
    if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  }
}

function displayGrid() {
    for (let y=0; y<ROWS; y++) {
      for (let x=0; x<COLS; x++) {
        if (grid[y][x] === 0) {
          fill("white");
        }
        if (grid[y][x] === 1) {
          fill("red");
        }
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
}


function displayText() {
  fill(50);
  textAlign(LEFT, BOTTOM);
  text (t + s, 50, 25);
}

function createEmptyGrid(COLS, ROWS) {
  let empty = [];
  for (let y=0; y<ROWS; y++) {
    empty.push([]);
    for (let x=0; x<COLS; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}
