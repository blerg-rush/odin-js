const content = document.querySelector('#content');

function createSquare(x,y){
    const square = document.createElement('div');
    square.setAttribute('id', `${x},${y}`);
    square.classList.add('square');
    content.appendChild(square);
}