class Rectangle {
    constructor(_posX, _posY) {
        this.posX = _posX;
        this.posY = _posY;
        this.width = random(30, 80);
        this.height = random(30, 80);
        this.angle = random(0, 360);
    }  
    
    render() {
        fill(0);
        noStroke();
        push();
        translate(this.posX, this.posY);
        rotate(this.angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}