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

let shapes = []
let gridCount = 8;
let gridSpacing = 800 / gridCount;

function setup() {
    rectMode(CENTER);
    angleMode(DEGREES);
    createCanvas(800, 800);

    for(let y = 0; y < gridCount; y++) {
        for(let x = 0; x < gridCount; x++) {
            shapes.push(new Rectangle(x * gridSpacing, y * gridSpacing));
        }
    }
}

function draw() {
    background(125);

  /*   for(let i = 0; i < shapes.length; i++) {
        shapes[i].render();
    } */

    translate(gridSpacing / 2, gridSpacing / 2);
    shapes.forEach(shape => {
         shape.render()
    })

}