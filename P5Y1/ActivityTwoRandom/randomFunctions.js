let randomNumber;

let randomNumberTwo = Math.random() * 750;

function setup() {
    createCanvas(500, 500);
    background(0,0,0);
    randomNumber = int(random(5, 12));
    console.log(randomNumber);
    rectMode(CENTER);
}

function draw() {
  let i = 0;
  for(i = 0; i < randomNumberTwo; i++) {
        rect(randomNumberTwo * random(0, 100), randomNumberTwo * random(0, 100), random(0, 50), random(50, 150));
        fill(random(0, 255), random(0, 255), random(0, 50));
  }
}
