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

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let win = `You won! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lose! ${computerSelection} beats ${playerSelection}`;
    let draw = `You draw! Both played ${playerSelection}`;

    if(player == 'rock'){
        switch(computer){
            case 'rock': return draw;
            case 'paper': return lose;
            case 'scissors': return win;
        }
    }else if(player == 'paper'){
        switch(computer){
            case 'rock': return win;
            case 'paper': return draw;
            case 'scissors': return lose;
        }
    }else if(player == 'scissors'){
        switch(computer){
            case 'rock': return lose;
            case 'paper': return win;
            case 'scissors': return draw;
        }
    }else{
        return 'Hey, no cheating! Try again.';
    }
}

function win(playerSelection,computerSelection){
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

function lose(playerSelection,computerSelection){
    return `You lose. ${computerSelection} beats ${playerSelection}`;
}

function draw(playerSelection){
    return `You draw. Both played ${playerSelection}`
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