/* function scream(_numScreams, _name) {
    for(let x=0; x<_numScreams; x++) {
        console.log(_name);
    }

}

scream(5, "help"); */

//declaring array
let data = [23,56,75,172,250,300,400,504,602,684];
let maxValue = Math.max(...data);
console.log(maxValue);

//declaring variables
let numBlocks = data.length;
let chartWidth = 400;
let chartHeight = 400;
let marginLeft = 10;
let marginRight = 10;
let blockGap = 20;
let screenWidth = 500;
let screenHeight = 500;



//calculations
let blockWidth = (chartWidth - (marginLeft + marginRight) - ((numBlocks-1)*blockGap))/numBlocks;

let firstBlockxPos = ((screenWidth-chartWidth)/2)+marginLeft;

let masterGap = blockWidth+blockGap;

//squarer function
/* function squarer(_num) {
    let squared = _num * _num;

    return squared;
}

squarer(3); */

function scaler(_num) {
    let scaleValue = chartHeight/maxValue;

    return _num*scaleValue;
}


//Main Function to setup and draw actual bar chart
function setup() {
    createCanvas(screenWidth, screenHeight);
    background(200);
    rectMode(CORNER);
    noLoop();
}

function draw() {
    background(200);
    fill(0);
    for(let x=0; x < data.length; x++) {
        push();
        translate(firstBlockxPos + (x*masterGap), 450);
        rect(0,0,blockWidth, scaler(-data[x]));
        pop();
    }
   
}