let table;
let data = [];

function preload() {
    table = loadTable('data/HSPAB17.20230221T140245.csv', 'csv', 'header');
  }

function tidyData() {
    for(let x=0; x < table.getRowCount(); x++) {
        data.push(table.rows[x].obj)
    }
}

function setup() {
    tidyData();
    createCanvas(500, 500)
}

function draw() {
    background(0)

}
