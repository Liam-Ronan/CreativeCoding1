class CirclePattern {
    constructor(_posX, _posY, _radius) {
        this.shapes = [];
        this.numOfObjects = 300;
        this.angleStep = 360 / this.numOfObjects;
        this.radius = _radius;
        this.posX = _posX;
        this.posY = _posY;
    }

    populateShapes() {
        for(let a = 0; a < 360; a += this.angleStep) {
            let pointX = this.radius * cos(a);
            let pointY = this.radius * sin(a);
            this.shapes.push(new Rectangle(pointX, pointY, 0.5));
            /* radius = radius - 0.15; */
        }
    }

    render() {
        translate(this.posX, this.posY)
        this.shapes.forEach(shape => {
            shape.render()
            shape.step();
       })
    }
}