class Polygon extends Shape {
    constructor(_posX, _posY, _scale=1, _numberOfSides = Math.floor(random(3, 8))) {
        super(_posX, _posY, _scale);
        this.innerRadius = random(10, 20);
    }  
    
    render() {
        fill(random(0, 100), random(50, 255), random(0, 100));
        noStroke();

        push();
        translate(this.posX, this.posY);
        scale(this.scale);
        rotate(this.angle);

        let angleStep = 360/this.numberOfSides;

        //clockwise
        beginShape();
        for(let a = 0; a < 360; a = a + angleStep) {
            vertex(cos(a) * this.width / 2, sin(a) * this.width / 2);
        }

         //anti-clockwise
         beginContour();
        for(let a = 360; a > 0; a = a - angleStep) {
            vertex(cos(a) * this.innerRadius, sin(a) * this.innerRadius);
        }
        endContour();
        endShape(CLOSE);
        pop();
    }
}