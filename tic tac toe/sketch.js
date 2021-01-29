//tic tac toe

// You will be playing against the computer in this tic tac toe game. The computer will try to guess your moves and counter them, whether
// that be making the game a tie or winning by making it's own row. Complete as many rounds as you want

let grid = [[0,0,0],
            [0,0,0],      
            [0,0,0]];
let rows = grid.length;
let cols = grid[0].length;
let cellWidth;
let cellHeight;
let s = 0;
let t = "Your score: ";

function setup() {
  let myCanvas = createCanvas(windowWidth*0.8, windowHeight*0.8);
  myCanvas.position(windowWidth*0.1, windowHeight*0.1);
  
  grid = createEmptyGrid(rows, cols);
  cellWidth = width*0.8 / cols;
  cellHeight = height*0.8 / rows;
}

function draw() {
  background(200);
  displayGrid();
  displayText();
}

function mousePressed() {
   let x = Math.floor(mouseX / cellWidth);
   let y = Math.floor(mouseY / cellHeight);

   playerTurn(x, y); 
}

function playerTurn(x, y) {
  if (grid[y][x] === 0) {
    grid[y][x] = 1;  
    s = s + 1;
    if (s > 3) {
      grid = createEmptyGrid(rows, cols);
      s = 0;
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
          fill("red");
        }
        // if (grid[y][x] === 2) {
        //   fill("black");
        // }
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
}


function displayText() {
  fill(50);
  textAlign(LEFT, BOTTOM);
  text (t + s, 50, 25);
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
