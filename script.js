const content = document.querySelector('#content');
let gridSize = 16;
let gridWidth = 500;
let squareSize = Math.floor(gridWidth / gridSize);
let color = 'black';

function createContainer(gridSize){
    content.innerHTML = '';
    content.style.width = `${gridWidth}px`;
    content.style.height = `${gridWidth}px`;
    content.style.margin = 'auto';
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
            createSquare(gridSize,j,i);
        }
    }
}

function createSquare(gridSize,x,y){
    squareSize = Math.floor(gridWidth / gridSize);
    const square = document.createElement('div');
    square.setAttribute('id', `${x},${y}`);
    square.addEventListener('mouseenter', () => square.style.backgroundColor = color);
    style(square,x,y);
    content.appendChild(square);
}

function style(square,x,y){
    square.style.width = `${squareSize - 1}px`;
    square.style.height = `${squareSize - 1}px`;
    square.style.display = 'inline-block';
    square.style.border = '1px solid black';
    if(x > 0) square.style.borderLeft = 'none';
    if(y > 0) square.style.borderTop = 'none';
}

function setSquareSize(){

}

function reSize(){
    let newSize = prompt('How many squares per side?');
    createContainer(newSize);
}

createContainer(gridSize);

