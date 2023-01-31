// This is where it all begins
let randomNumberOne = Math.random();

//between 0-100
let randomNumberTwo = Math.random() * 100;
console.log(randomNumberTwo);

//between 30 & 80
let randomNumberThree = Math.random() * 50 + 30;
console.log(randomNumberThree);

let randomNumberFour;

function setup() {
    createCanvas(500, 500);
    background(255,0,0);

    randomNumberFour = Math.random(30, 80);
    console.log(randomNumberFour);
}

function draw() {
   background(255,0,0);

   fill(0,0,255);
   stroke(0,255,0);
   strokeWeight(3);

   rect(50,50,50,50);
}