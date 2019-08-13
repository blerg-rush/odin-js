const content = document.querySelector('#content');
let gridSize = 16;
let gridWidth = 500;
let squareSize = Math.floor(gridWidth / gridSize);

function createContainer(gridSize){
    content.style.width = `${gridWidth}px`;
    content.style.height = `${gridWidth}px`;
    content.style.display = 'grid';
    content.style.gridGap = '0px';
    content.style.justifyContent = 'center';
    content.style.alignContent = 'center';
    content.style.gridTemplateColumns = `repeat(${gridSize}, auto)`
    content.style.gridTemplateRows = `repeat(${gridSize}, auto)`
    createGrid(gridSize);
}

function createGrid(gridSize){
    for(i=0 ; i<gridSize; i++){
        for(j=0 ; j<gridSize; j++){
            createSquare(j,i);
        }
    }
}

function createSquare(x,y){
    const square = document.createElement('div');
    square.setAttribute('id', `${x},${y}`);
    square.classList.add('square');
    style(square,x,y);
    content.appendChild(square);
}

function style(square,x,y){
    square.style.width = `${squareSize - 2}px`;
    square.style.height = `${squareSize - 2}px`;
    square.style.display = 'inline-block';
    square.style.border = '1px solid black';
    if(x > 0) square.style.borderLeft = 'none';
    if(y > 0) square.style.borderTop = 'none';
}

function setSquareSize(){

}

function draw(){

}