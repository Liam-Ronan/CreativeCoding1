// This is where it all begins

let posX = 10;


function setup() {
    createCanvas(500, 500);
    background(255,0,0);
}

function draw() {
   background(255,0,0);
   fill(0,0,255);
   stroke(0,255,0);
   strokeWeight(3);

   rect(posX,50,100,100);

   posX = posX + 1;
}