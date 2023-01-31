class Rectangle extends Shape {
    constructor(_posX, _posY, _scale = 1) {
        super(_posX, _posY, _scale)
    }  
    
    render() {
        fill(random(0, 100), random(100, 200), random(0, 255));
        noStroke();
        push();
        translate(this.posX, this.posY);
        scale(this.scale);
        rotate(this.angle);
        rect(0, 0, this.width, this.height);
        pop();
    }

}