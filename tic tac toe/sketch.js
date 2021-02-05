//tic tac toe

// You will be playing against the computer in this tic tac toe game. The computer will try to guess your moves and counter them, whether
// that be making the game a tie or winning by making it's own row/column. Complete as many rounds as you want

let grid = [[0,0,0],
            [0,0,0],      
            [0,0,0]];
let rows = grid.length;
let cols = grid[0].length;
let cellWidth;
let cellHeight;
let s = 0;
let cpuS = 0;
let t = "Your score: ";
let cpuT = "CPU's score: ";

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
  displayCPUText();
}

function mousePressed() {
   let x = Math.floor(mouseX / cellWidth);
   let y = Math.floor(mouseY / cellHeight);

   playerTurn(x, y); 
}

function playerTurn(x, y) { //this is where things get ugly
  if (grid[y][x] === 0) {
    grid[y][x] = 1;
    aiTurn(x, y);
    if (grid[0][0] === 1 && grid[0][1] === 1 && grid[0][2] === 1) { //if row 1 is red straight across
      s = s + 1;
      grid = createEmptyGrid(rows, cols); 
    }
    else if (grid[1][0] === 1 && grid[1][1] === 1 && grid[1][2] === 1) { //if row 2 is red straight across
      s = s + 1;
      grid = createEmptyGrid(rows, cols); 
    }
    else if (grid[2][0] === 1 && grid[2][1] === 1 && grid[2][2] === 1) { //if row 3 is red straight across
      s = s + 1;
      grid = createEmptyGrid(rows, cols); 
    }
    else if (grid[0][0] === 1 && grid[1][0] === 1 && grid[2][0] === 1) { //if col 1 is red straight down
      s = s + 1;
      grid = createEmptyGrid(rows, cols); 
    }
    else if (grid[0][1] === 1 && grid[1][1] === 1 && grid[2][1] === 1) { //if col 2 is red straight down
      s = s + 1;
      grid = createEmptyGrid(rows, cols); 
    }
    else if (grid[0][2] === 1 && grid[1][2] === 1 && grid[2][2] === 1) { //if col 3 is red straight down
      s = s + 1;
      grid = createEmptyGrid(rows, cols); 
    }
    else if (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1) { //if a red row is diagonal thats leaning down right or leaning up left (basically if it looks like this: \)
      s = s + 1;
      grid = createEmptyGrid(rows, cols);
    }
    else if (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1) { //if a red row is diagonal thats leaning down left or leaning up right (basically if it looks like this: /)
      s = s + 1;
      grid = createEmptyGrid(rows, cols);
    }
    // the line of code below checks to see if the board is completely filled, but there are no completed red rows or blue rows.
    else if(grid[0][0] != 0 && grid[0][1] != 0 && grid[0][2] != 0 && grid[1][0] != 0 && grid[1][1] != 0 && grid[1][2] != 0 && grid[2][0] != 0 && grid[2][1] != 0 && grid[2][2] != 0) {
      grid = createEmptyGrid(rows, cols);
    }
  }  
}

function aiTurn(x, y) {
  if (grid[0][0] === 1) { // if the top left square is red
    if (grid[0][0] === 1 && grid[0][1] === 1) { //is the top left square red and the top middle square red?
      if (grid[0][2] === 0) { //is the top right square free?
        grid[0][2] = 2;
      }
    }
    else if (grid[0][0] === 1 && grid[0][2] === 1) { //is the top left square red and is the top right square red?
      if (grid[0][1] === 0) { //is the top middle square free?
        grid[0][1] = 2;
      }
    }
    else if (grid[0][0] === 1 && grid[1][1] === 1) { //is the player trying to get a diagonal line?
      if (grid[2][2] === 0) { //is the bottom left square free?
        grid[2][2] = 2;
    }
  }
    else if (grid[0][0] === 1 && grid[2][2] === 1) { //is the player trying to get a diagonal line but the middle is still white?
      if (grid[1][1] === 0) { //is the middle square free?
        grid[1][1] = 2;
    }
  }
    else if (grid[0][0] === 1 && grid[1][0] === 1) { //is the top left square red and the square below it red?
      if (grid[2][0] === 0) { //is the bottom left square free?
        grid[2][0] = 2;
      }
    }
    else if (grid[0][0] === 1 && grid[1][2] === 1) { //is the top left square red and the middle right it red?
      if (grid[1][1] === 0) { //is the middle square free?
        grid[1][1] = 2;
      }
    }
    else if (grid[0][0] === 1 && grid[2][0] === 1) { //is the top left square red and the bottom left square red?
      if (grid[1][0] === 0) { //is the middle left square free?
        grid[1][0] = 2;
      }
    }
    else if (grid[0][0] === 1 && grid[2][1] === 1) { //is the top left square red and the bottom middle square red?
      if (grid[1][1] === 0) { //is the middle square free?
        grid[1][1] = 2;
      }
    }
  }
  ///
    if (grid[0][1] === 1) { //is the top middle square red?
    if (grid[0][1] === 1 && grid[1][1] === 1) { //are both the top middle and the middle red?
        if (grid[2][1] === 0) { //is the bottom middle square free?
          grid[2][1] = 2;
        }
      }
      else if (grid[0][1] === 1 && grid[2][1] === 1) { //are both the top middle and the bottom middle red?
        if (grid[1][1] === 0) { //is the middle square free?
          grid[1][1] = 2;
        }
      }
      else if (grid[0][1] === 1 && grid[0][2] === 1) { //are both the top middle and top right square red?
        if (grid[0][0] === 0) { //is the top right square free?
          grid[0][0] = 2;
      }
    }
}
///  
  if (grid[0][2] === 1) { //is the top right square red?
    if (grid[0][2] === 1 && grid[1][2] === 1) { //are both the top right and the middle right red?
      if (grid[2][2] === 0) { //is the bottom right square free?
        grid[2][2] = 2;
      }
    }
    else if (grid[0][2] === 1 && grid[1][1] === 1) { //are both the top right and the middle red?
      if (grid[2][0] === 0) { //is the bottom left square free?
        grid[2][0] = 2;
      }
    }
    else if (grid[0][2] === 1 && grid[2][2] === 1) { //are both the top right and bottom right square red?
      if (grid[1][2] === 0) { //is the top right square free?
        grid[1][2] = 2;
    }
  }
      else if (grid[0][2] === 1 && grid[2][0] === 1) { //are both the top right and bottom lefy square red?
        if (grid[1][1] === 0) { //is the middle square free?
      grid[1][1] = 2;
      }
    }
  }
///
  if (grid[1][0] === 1) { //is the middle left square red?
    if (grid[1][0] === 1 && grid[1][1] === 1) { //are both the middle left and the square beside it red?
      if (grid[1][2] === 0) { //is the middle right square free?
        grid[1][2] = 2;
      }
    }
    else if (grid[1][0] === 1 && grid[2][0] === 1) { //are both the middle left and the square below it red?
      if (grid[0][0] === 0) { //is the top left square free?
        grid[0][0] = 2;
      }
    }
    else if (grid[1][0] === 1 && grid[0][0] === 1) { //middle left square is red and top left square is red
      if (grid[2][0] === 0) { //is bottom left square free?
        grid[2][0] = 2;
      }
    }
    }
///
  if (grid[1][1] === 1) { //is the middle square in the second row red?
    if (grid[1][1] === 1 && grid[0][0] === 1) { //center square is red and top left square is red
      if (grid[2][2] === 0) { //is the bottom right square free?
        grid[2][2] = 2;
      }
    }
    else if (grid[1][1] === 1 && grid[0][1] === 1) { //center square is red and top middle square is red
      if (grid[2][1] === 0) { //is the bottom middle square free?
        grid[2][1] = 2;
      }
    }
    else if (grid[1][1] === 1 && grid[0][2] === 1) { //center square is red and top right square is red
      if (grid[2][0] === 0) { //is the bottom left square free?
        grid[2][0] = 2;
      }
    }
    else if (grid[1][1] === 1 && grid[1][0] === 1) { //center square is red and middle left square is red
      if (grid[1][2] === 0) { //is the middle right square free?
        grid[1][2] = 2;
      }
    }
    else if (grid[1][1] === 1 && grid[1][2] === 1) { //center square is red and middle right square is red
      if (grid[1][0] === 0) { //is the middle left square free?
        grid[1][0] = 2;
      }
    }
    else if (grid[1][1] === 1 && grid[2][0] === 1) { //center square is red and bottom left square is red
      if (grid[0][2] === 0) { //is the bottom left square free
        grid[0][2] = 2;
      }
    }
    else if (grid[1][1] === 1 && grid[2][1] === 1) { //center square is red and bottom middle square is red
      if (grid[0][1] === 0) { //is the top middle square free
        grid[0][1] = 2;
      }
    }
    else if (grid[1][1] === 1 && grid[2][2] === 1) { //center square is red and bottom right square is red
      if (grid[0][0] === 0) { //is the top left square free
        grid[0][0] = 2;
      }
    }
  }
///
if (grid[1][2] === 1) { //is the middle right square red?
  if (grid[1][2] === 1 && grid[0][2] === 1) { // mid right is red and top right is red
    if (grid[2][2] === 0) { //is bottom right free?
      grid[2][2] = 2;
      }
    }
  else if (grid[1][2] === 1 && grid[1][0] === 1) { //mid right is red and mid left is red
    if (grid[1][1] === 0) { //is center square free?
      grid[1][1] = 2;
    }
  }
  else if (grid[1][2] === 1 && grid[1][1] === 1) { //mid right is and center is red
    if (grid[1][0] === 0) { //is mid left square free?
      grid[1][0] = 2;
      }
    }
  else if (grid[1][2] === 1 && grid[2][2] === 1) { //mid right is red and bottom right is red
    if (grid[0][2] === 0) { //is top right square free?
      grid[0][2] = 2;
      }
    }
  }
///
if (grid[2][0] === 1) { //is the bottom left square red?
  if (grid[2][0] === 1 && grid[2][1] === 1) { //bottom left red and bottom middle red
    if (grid[2][2] === 0) { //is bottom right square free?
      grid[2][2] = 2;
      }
    }
  else if (grid[2][0] === 1 && grid[2][2] === 1) { //bottom left red and bottom right red
    if (grid[2][1] === 0) { //is bottom middle square free?
      grid[2][1] = 2;
      }
    }
  else if (grid[2][0] === 1 && grid[0][2] === 1) { //bottom left red and top right red
    if (grid[1][1] === 0) { //is middle square free?
      grid[1][1] = 2;
      }
     }
  else if (grid[2][0] === 1 && grid[0][0] === 1) { //bottom left red and top left red
    if (grid[1][0] === 0) { //is middle left square free?
      grid[1][0] = 2;
      }
    }
  }
///
if (grid[2][1] === 1) { //is the bottom middle square red?
  if (grid[2][1] === 1 && grid[2][2] === 1) { //bottom middle red and bottom right red
    if (grid[2][0] === 0) { //is bottom left square free?
      grid[2][0] = 2;
      }
    }
  }
  if (grid[0][0] === 2 && grid[0][1] === 2 && grid[0][2] === 2) { //if row 1 is blue straight across
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols); 
  }
  else if (grid[1][0] === 2 && grid[1][1] === 2 && grid[1][2] === 2) { //if row 2 is blue straight across
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols); 
  }
  else if (grid[2][0] === 2 && grid[2][1] === 2 && grid[2][2] === 2) { //if row 3 is blue straight across
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols); 
  }
  else if (grid[0][0] === 2 && grid[1][0] === 2 && grid[2][0] === 2) { //if col 1 is blue straight down
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols); 
  }
  else if (grid[0][1] === 2 && grid[1][1] === 2 && grid[2][1] === 2) { //if col 2 is blue straight down
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols); 
  }
  else if (grid[0][2] === 2 && grid[1][2] === 2 && grid[2][2] === 2) { //if col 3 is blue straight down
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols); 
  }
  else if (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2) { //if a blue row is diagonal thats leaning down right or leaning up left (basically if it looks like this: \)
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols);
  }
  else if (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2) { //if a blue row is diagonal thats leaning down left or leaning up right (basically if it looks like this: /)
    cpuS = cpuS + 1;
    grid = createEmptyGrid(rows, cols);
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
        if (grid[y][x] === 2) {
          fill("LightSkyBlue");
        }
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
}


function displayText() {
  fill(50);
  textAlign(LEFT, BOTTOM);
  text (t + s, windowWidth/27, windowHeight/27);
}

function displayCPUText() {
  fill(50);
  textAlign(RIGHT, BOTTOM);
  text(cpuT + cpuS, windowWidth/2, windowHeight/27);
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
