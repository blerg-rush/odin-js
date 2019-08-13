const content = document.querySelector('#content');
let gridSize = 16;
let gridWidth = 400;

function createSquare(x,y){
    const square = document.createElement('div');
    square.setAttribute('id', `${x},${y}`);
    square.classList.add('square');
    content.appendChild(square);
}

function createGrid(size){

}

function calculateSize(){

}

function draw(){

}