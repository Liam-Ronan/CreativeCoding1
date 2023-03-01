
class BarChart {
    constructor(_chartWidth, _chartHeight, _name, _posX, _posY, _data) {
        this.chartWidth = _chartWidth;
        this.chartHeight = _chartHeight;
        this.name = _name;
        this.posX = _posX;
        this.posY = _posY;
        this.data = _data;
        this.numTicks = 9;
        this.maxNum = this.calculateMax();
    }

    render() {
        noFill();
        stroke(255)
        push();
        translate(this.posX, this.posY);
        this.drawXAxis();
        this.drawYAxis();
        pop();
    }

    drawXAxis() {
         //X-axis Line
        line(0, 0, this.chartWidth, 0);
    }

    drawYAxis() {
        //Y-axis Line
        stroke(255)
        line(0,0,0,-this.chartHeight);

        for(let y = 1; y < this.numTicks + 1; y++) {
            let ySpace = -this.chartHeight / this.numTicks;
            stroke(255)
            line(0, ySpace * y, -10, ySpace * y);

            let unitSpace = (this.maxNum / this.numTicks).toFixed();
            noStroke();
            fill(255);
            textSize(15);
            textAlign(RIGHT, CENTER)
            text(y * unitSpace, -20, ySpace*y);
        }
    }

    calculateMax() {
        console.log(data.rows[0].obj.Total);
        console.log(data.getRowCount());

        let max = 0;
        for(let x = 0; x < this.data.getRowCount(); x++) {
            if(this.data.rows[x].obj.Total) {
                max = this.data.rows[x].obj.Total
            }
            console.log(max);
        }
        return max;
        /* console.log(max); */
    }

}