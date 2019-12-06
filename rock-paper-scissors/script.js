const results = document.querySelector('#results');
const comp = document.querySelector('#comp');
const scoreboard = document.querySelector('#scoreboard');
const buttons = document.querySelectorAll('button');
let pScore = 0;
let cScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    playRound(button.textContent, computerPlay());
    })
})

function computerPlay(){
    choice = Math.floor((Math.random() * 3));
  if(choice == 0){
      return('Rock');
  }else if(choice == 1){
      return('Paper');
  }else{
      return('Scissors');
  }
}

function playRound(pSelect, cSelect){
    comp.textContent = `Computer played ${cSelect}.`;
    if(pSelect == 'Rock'){
        switch(cSelect){
            case 'Rock':
                results.textContent = draw(pSelect);
                break;
            case 'Paper':
                results.textContent = lose(pSelect, cSelect);
                break;
            case 'Scissors':
                results.textContent = win(pSelect, cSelect);
        }
    }else if(pSelect == 'Paper'){
        switch(cSelect){
            case 'Rock':
                results.textContent = win(pSelect, cSelect);
                break;
            case 'Paper':
                results.textContent = draw(pSelect);
                break;
            case 'Scissors':
                results.textContent = lose(pSelect, cSelect);
        }
    }else{
        switch(cSelect){
            case 'Rock':
                results.textContent = lose(pSelect, cSelect);
                break;
            case 'Paper':
                results.textContent = win(pSelect, cSelect);
                break;
            case 'Scissors': results.textContent = draw(pSelect);
        }
    }
}

function updateScore(result){
    switch(result){
        case 'win':
            pScore++;
            break;
        case 'lose':
            cScore++;
            break;        
    }
    checkScore();
}

function checkScore(){
    if (pScore == 5){
        scoreboard.textContent = `You beat the computer ${pScore} - ${cScore}! Try again?`
        reset();
    }else if (cScore == 5){
        scoreboard.textContent = `The computer beat you ${cScore} - ${pScore}! Try again?`
        reset();
    }else{
        scoreboard.textContent = `The score is ${pScore} - ${cScore}.`;
    }
}

function reset(){
    pScore = 0;
    cScore = 0;
}

function win(pSelect,cSelect){
    updateScore('win');
    return `You win! ${pSelect} beats ${cSelect}`;
}

function lose(pSelect,cSelect){
    updateScore('lose');
    return `You lose. ${cSelect} beats ${pSelect}`;
}

function draw(pSelect){
    updateScore('draw');
    return `You draw. Both played ${pSelect}`
}

/*
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let selection;
    let result;

    while((playerScore < 5) && (computerScore < 5)){
        selection = prompt('Rock, Paper, or Scissors?');
        result = playRound(selection,computerPlay());
        
        if(result.split(' ')[1] == 'win!'){
            playerScore++;
        }else if(result.split(' ')[1] == 'lose.'){
            computerScore++;
        }else{
            //draw or invalid
        }

        alert(`${result}\nScore: ${playerScore} - ${computerScore}`);
    }

    if(playerScore == 5){
        alert('You beat the computer!');
    }else{
        alert('Sorry, the computer beat you.');
    }

    replay();
}
*/

function replay(){
    confirm('Would you like to play again?') ? playGame() : alert('Reload if you change your mind!');
}

//playGame();