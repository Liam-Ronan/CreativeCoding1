
class BarChart{
    constructor(_height, _width, _posX, _posY, _data) {
        this.height = _height; 
        this.width = _width;
        this.posX = _posX;
        this.posY = _posY;
        this.data = _data;     

        this.margin = 10;
        this.gap = 10;
        this.numBlocks = this.data.length
        this.barWidth = (this.width - (this.margin * 2) - ((this.numBlocks - 1)* this.gap)) / this.data.length;
        this.masterGap = this.barWidth + this.gap;
    }

    render() {
        push();
        translate(this.posX, this.posY)
            this.drawYAxisLine();
            this.drawXAxisLine();
            this.drawBars();
        pop();
    }

    drawYAxisLine() {
        noFill();
        stroke(0);
        line(0, 0, 0, -this.height)
    }

    drawXAxisLine() {
        noFill();
        stroke(0);
        line(0, 0, this.width, 0) 
    }

    drawBars() {
        push()
        translate(this.margin,0)
        fill(255,0,0)
        for(let i=0; i < this.data.length; i++) {
            rect(i*this.masterGap,0, this.barWidth, - this.data[i])
        }
        pop()
    }

    scaler() {

    }
}