let fruits = [23,56,78,90];
let charts = [];

function setup() {
    createCanvas(500, 500);
    background(150);
    angleMode(DEGREES);
    rectMode(CORNER);

    charts.push(new BarChart(400,400,50,450,fruits));

    
}

function draw() {
    charts[0].render();
}






