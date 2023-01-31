let angle = 90;

let randomNumber = Math.random() * 5;

function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {

   let i;

   for(i = 0; i < randomNumber; i++) {
    stroke(100,100,250);
    strokeWeight(10);
 
    push();
    translate(300, 300);
    rotate(angle);
    rect(0 * 750, 0 * 750, 400, 400);
    pop();
   }

   angle = angle + 5;

  

}
