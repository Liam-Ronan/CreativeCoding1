/* let shapes = [];
//Array methods
//arrayname.method()
//puts an element at the end of an array
shapes.push("john");
shapes.push("liam");
shapes.push("karl");

//puts element at the beginning of an array
shapes.unshift("Mark");

//arrayname[index]
shapes[4] = "brain";
shapes[7] = "legend";

shapes[1] = "peter"; */


let angle = 0;
let myPatterns = [];


function setup() {
    rectMode(CENTER);
    angleMode(DEGREES);
    createCanvas(800, 800);

    myPatterns.push(new CirclePattern(400, 400, 300));
    myPatterns.push(new CirclePattern(0, 0, 200));
    myPatterns.push(new CirclePattern(0, 0, 400));

    myPatterns.forEach(pattern => {
        pattern.populateShapes();
    });


    ///This loop creates a GRID PATTERN///
/*     for(let y = 0; y < gridCount; y++) {
        for(let x = 0; x < gridCount; x++) {
            let coinToss = Math.floor(random(0, 2));
            if(coinToss == 2) {
                shapes.push(new Polygon(x * gridSpacing, y * gridSpacing)); 
            }
            else if(coinToss == 1) {
                shapes.push(new Polygon(x * gridSpacing, y * gridSpacing));
            }
            else {
                shapes.push(new Rectangle(x * gridSpacing, y * gridSpacing));
            }
        }
    } */

    ///CIRCULAR PATTERN

 /*    for(let a = 0; a < 1000; a += angleStep) {
        let pointX = radius * cos(a);
        let pointY = radius * sin(a);
        shapes.push(new Rectangle(pointX, pointY, 0.5));
        radius = radius - 0.15;
    } */
}

function draw() {
    background(0, 50);

    myPatterns.forEach(pattern => {
        pattern.render();
    });

}