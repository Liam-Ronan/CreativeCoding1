/* function scream(_numScreams, _name) {
    for(let x=0; x<_numScreams; x++) {
        console.log(_name);
    }

}

scream(5, "help"); */

//Chart
let numBlocks = 10;
let chartWidth = 400;
let chartHeight = 400;
let marginLeft = 10;
let marginRight = 10;
let blockGap = 20;
let screenWidth = 500;
let screenHeight = 500;
let blockWidth = (chartWidth - (marginLeft + marginRight) - ((numBlocks-1)*blockGap))/numBlocks;

let firstBlockxPos = ((screenWidth-chartWidth)/2)+marginLeft;

let masterGap = blockWidth+blockGap;

console.log(blockWidth);

function setup() {
    createCanvas(screenWidth, screenHeight);
    background(200);
    rectMode(CORNER);
    noLoop();
}

function draw() {
    background(200);
    fill(0);
    for(let x=0; x < numBlocks; x++) {
        push();
        translate(firstBlockxPos + (x*masterGap), chartHeight);
        rect(0,0,blockWidth, random(-50,-400));
        pop();
    }
   
}