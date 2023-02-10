// Here is a data as an array of objects. Remember to access an array you use the arrayName {index} like myAmmount[0]. Then you access the properties value by using the dot notation
let fruits = [
    { name: "coconut", amount: 1000 },
    { name: "coconut", amount: 500 },
    { name: "coconut", amount: 2000 },
    { name: "coconut", amount: 1500 },
    { name: "coconut", amount: 800 },
];

let numFruits = [];

/*
for (let x = 0; x < fruits.length; x++) 
    {  
        numFruits.push(fruits[x.amount]);
    } */


// list of variables
let maxValue = Math.max(...fruits.map(object => object.amount))
let numBlocks = fruits.length; 
let chartWidth = 200; 
let chartHeight = 300; 
/* let chartxpos = 100
let chartypos = 450 */
let marginLeft = 20
let marginRight = 20
let blockGap = 5
let screenWidth = 500
let screenHeight = 500
/* let numTick = 5 */
let lengthticks = 10

// Calculating the blockWidth
let blockWidth = (chartWidth - (marginLeft + marginRight) - ((numBlocks - 1) * blockGap)) / numBlocks;

/* let firstBlockxPos = ((screenWidth - chartWidth) / 2) + marginLeft; */
let masterGap = blockWidth + blockGap

/* Function to scale the bars */
function scaleMeBaby(_num) {
    let scaleValue = chartHeight / maxValue;
    return _num * scaleValue
}

function setup() {
    createCanvas(screenWidth, screenHeight); 
    background(200); 
    angleMode(DEGREES); 
    rectMode(CORNER);
} 

function drawAxis(_pos, _rotateAngle, _length, _strokeColour, _strokeWeight) {

    
    let tickGap = chartHeight / _numTick;  
    let numGap = maxValue / _numTick;    
    
    for (let x = 0; x < _numTick + 1; x++) 
    {    
        stroke(1);
        line(0, x * -tickGap, -lengthticks, x * -tickGap,);
        noStroke();
        rotate(_rotateNum);
        fill(50)    
        textSize(15);    
        textAlign(RIGHT, CENTER)    
        text((x * numGap), -15, x * -tickGap) 
    }
}



function draw() 
{ 

    drawAxis()

    stroke(0)  
    strokeWeight(1)  
    line(0, 0, chartWidth, 0); 
    line(0, 0, 0, -chartHeight);  

    fill(0);  
    
    let pos = createVector(100, 450);
    // translating the whole chart  
    translate(pos.x, pos.y)  

    // this loop draws our bars  
    for (let x = 0; x < fruits.length; x++) 
    {
        push();    
        translate(marginLeft + (x * masterGap), 0)    
        noStroke()    
        fill(fruits[x].amount, 0, 0)    
        rect(0, 0, blockWidth, scaleMeBaby(-fruits[x].amount));
        pop();
    }  

    drawTicks(5);
    
}

