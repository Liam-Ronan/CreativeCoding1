let posX = 0;

function setup() {
    createCanvas(500, 500);
    background(0,0,0);
    rectMode(CENTER);
}

function draw() {
    background(0,0,0);
    rect(posX, 250, 50, 50);
    fill(100, 210,0);
    stroke(255,0,0);
    strokeWeight(3);
    posX++; 
}
