let numLines = 10;
let lineGap = 500/ numLines;


function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
   background(0,0,0);
   //drawGrid();
   
   translate(lineGap / 2, lineGap / 2);
   for( let y = 0; y < numLines; y++) {
        for(let x = 0; x < numLines; x++) {
            noFill();
            stroke(180);
            ellipse(x * lineGap, y * lineGap, lineGap, lineGap);
        }
   }

}

function drawGrid() {
    for (let x = 0; x < numLines; x++) {
        if(x % 5 == 0) {
            noFill();
            stroke(0,255,255);
            line(x * lineGap, 0, x * lineGap, 500);
            line(0, x * lineGap, 500, x * lineGap);
        }
        else {
            noFill();
            stroke(0,255, 0, 255);
            line(x * lineGap, 0, x * lineGap, 500);
        }
   }
}