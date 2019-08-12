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
    let player = pSelect.toLowerCase();
    let computer = cSelect.toLowerCase();

    if(player == 'rock'){
        switch(computer){
            case 'rock': return draw(pSelect);
            case 'paper': return lose(pSelect, cSelect);
            case 'scissors': return win(pSelect, cSelect);
        }
    }else if(player == 'paper'){
        switch(computer){
            case 'rock': return win(pSelect, cSelect);
            case 'paper': return draw(pSelect);
            case 'scissors': return lose(pSelect, cSelect);
        }
    }else if(player == 'scissors'){
        switch(computer){
            case 'rock': return lose(pSelect, cSelect);
            case 'paper': return win(pSelect, cSelect);
            case 'scissors': return draw(pSelect);
        }
    }else{
        return 'Hey, no cheating! Try again.';
    }
}

function win(pSelect,cSelect){
    return `You won! ${pSelect} beats ${cSelect}`;
}

function lose(pSelect,cSelect){
    return `You lose. ${cSelect} beats ${pSelect}`;
}

function draw(pSelect){
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
        
        if(result.split(' ')[1] == 'won!'){
            playerScore++;
        }else if(result.split(' ')[1] == 'lose!'){
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

playGame();