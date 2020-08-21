function computerPlay() {
  const move = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * move.length);
  return move[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    return "tie";
  } else if (playerSelection == 'rock') {
    return (computerSelection == 'scissors') ? 
        "player" : "computer";
  } else if (playerSelection == 'scissors') {
    return (computerSelection == 'paper')  ?
        "player" : "computer"
  } else {
    return (computerSelection == 'rock')  ?
        "player" : "computer"
  }
}

function game() {
    let computer_wins = 0;
    let player_wins = 0;
    let result;
    let playerSelection, computerSelection;
    
    for (let i = 0; i < 5; i++) {
      playerSelection = prompt("Enter a move: ");
      computerSelection = computerPlay();
      result = playRound(playerSelection, computerSelection);

      if (result == "player") {
        player_wins += 1;
        console.log(`Player wins round ${i+1}`);
      } else if (result == "computer") {
        computer_wins += 1;
        console.log(`Computer wins round ${i+1}`);
      } else {
        console.log(`Round ${i+1} is a tie`);
      }
    }

    if (player_wins > computer_wins) {
      return "Player wins!";
    } else if (player_wins < computer_wins) {
      return "Computer wins!";
    } else {
      return "It's a tie!"
    }

}
