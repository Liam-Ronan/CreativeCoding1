let table;
let data = [];

function preload() {
    table = loadTable('data/DublinAverageHousePrices.csv', 'csv', 'header')
}

function tidyData(_data) {
    for(let i = 0; i < table.getRowCount(); i++) {
        data.push(table.rows[i].obj.VALUE);
    }
}

function setup() {
    tidyData(table);
    createCanvas(500,500);
    angleMode(DEGREES)

    t = new barChart(400,400,50,470,data,10,10,5);

}

function draw() {
    background(50);

    push()

    t.drawAxis();
    t.drawAxis(90, false, 0);
    t.drawData();
    pop();
}