let numLines = 10;
let lineGap = 500 / numLines;
let randomNumber = Math.random();

function setup() {
    createCanvas(600, 600);
    background(0,0,0);
}

function draw() {
  background(0);
  drawGrid();

  let i;
  let x;

  translate(lineGap / 2, lineGap / 2);
  for(i = 0; i < numLines; i++) {
        for(x = 0; x < numLines; x++) {
            stroke(0,255,255);
            strokeWeight(2);
            line(x * lineGap, y * lineGap, lineGap, lineGap);
            fill(randomNumber, randomNumber, randomNumber);
        }
  }
}

function drawGrid() {
    for(let x = 0; x < numLines; x++) {
        if(x % 5 == 0) {
            noFill();
            stroke(0,255,255);
            line(x * lineGap, 0, x * lineGap, 500);
            line(0, x * lineGap, 500, x * lineGap);
        }
        else {
            noFill();
            stroke(0,255,255);
            line(x * lineGap, 0, x * lineGap, 500);
        }
    }
}
