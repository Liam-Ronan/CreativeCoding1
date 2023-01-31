class Shape {
    constructor(_posX, _posY, _scale = 1) {
        this.posX = _posX;
        this.posY = _posY;
        this.width = random(30, 80);
        this.height = random(30, 80);
        this.angle = random(0, 360);
        this.scale = _scale;
    } 

    step() {
        this.angle = this.angle + 10;
    }
}