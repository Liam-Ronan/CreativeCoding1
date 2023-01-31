let numLines = 50;
let lineGap = 500/ numLines;

function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
   background(0,0,0);

   for (let x = 0; x < numLines; x++) {
        if(x % 5 == 0) {
            noFill();
            stroke(0,255,0);
            line(x * lineGap, 0, x * lineGap, 500);
            line(0, x * lineGap, 500, x * lineGap);
        }
        else {
            noFill();
            stroke(0,255,0, 100);
            line(x * lineGap, 0, x * lineGap, 500);
        }
   }

}