
class barChart {
    constructor(_height, _width, _posX, _posY, _data, _marginLeft, _marginRight, _blockGap) {

        this.height = _height;
        this.width = _width;
        this.posX = _posX;
        this.posY = _posY;
        this.data = _data;
        this.maxValue = Math.max(..._data);
        this.numBlocks = this.data.length;
        this.marginLeft = _marginLeft;
        this.marginRight = _marginRight;
        this.blockGap = _blockGap;

        this.blockWidth = (this.width - (this.marginLeft + this.marginRight) - ((this.numBlocks - 1) * this.blockGap)) / this.numBlocks;
        this.masterGap = this.blockGap + this.blockWidth;

    }

    drawAxis(_rotation = 0, _labels = true, _tickLength = 10) {
        let numTicks = this.data.length;
        let tickGap = this.height / numTicks;
        let numGap = this.maxValue / numTicks;

        push()
        translate(this.posX, this.posY)
        angleMode(DEGREES);
        rotate(_rotation);
        noFill();
        stroke(100);
        line(0,0,0, -this.height)

        /* Draw Ticks */
        for(let i = 0; i < numTicks + 1; i++) {
            fill(255)
            stroke(155)
            line(0, i * -tickGap, -_tickLength, i * -tickGap);
            noStroke()
            
            if(_labels) {
                textSize(10);
                textAlign(RIGHT, CENTER)
                text(Math.round(((i * numGap)/5)*5), -10, i*-tickGap);
            }
        }

        pop();
    }

    scaler(_num) {
        let scaleVal = this.height / this.maxValue
        return _num * scaleVal;
    }

    drawData() {
        for(let i = 0; i < this.data.length; i++) {
            push()
            translate(this.marginLeft + (i * this.masterGap), 0)
            noStroke()
            fill(this.data[i]/500,100,100);
            rect(this.posX, this.posY, this.blockWidth, this.scaler(-this.data[i]));
            pop();
        }
    }
}