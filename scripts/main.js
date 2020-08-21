// Initialize player and computer score
let player_score = 0;
let computer_score = 0;
let round_winner, game_winner;
const ps_display = document.querySelector('#player_score');
const cs_display = document.querySelector('#computer_score');
const round_display = document.querySelector('#round_winner');
const winner_display = document.querySelector('#game_winner');

// Chose random move for computer
function computerPlay() {
  const move = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * move.length);
  return move[random];
}

function playRound(playerSelection) {
  computerSelection = computerPlay();

  // Conver moves to lowercase for comparison
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // If not a tie, use player move against possible computer moves
  // and return result
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

function move() {
  // Determine winner through playRound
  round_winner = playRound(this.textContent);
  winner_display.textContent = "";
  
  // Reset scores after 5
  if (player_score == 5 || computer_score == 5) {
    player_score = 0;
    computer_score = 0;
    ps_display.textContent = player_score;
    cs_display.textContent = computer_score;
  }

  if (round_winner == "player") {
    player_score += 1;
    ps_display.textContent = player_score;
    round_display.textContent = "You win the round!"
    if (player_score == 5) {
      game_winner = "player";
      winner_display.textContent = "You won the game! Choose a move to start a new game."
    }
  } else if (round_winner == "computer") {
    computer_score += 1;
    cs_display.textContent = computer_score;
    round_display.textContent = "Computer wins the round!"
    if (computer_score == 5) {
      game_winner = "computer";
      winner_display.textContent = "Computer won the game! Choose a move to start a new game."
    }
  } else {
    round_display.textContent = "The round is a tie!"
  }
}

// store play buttons in node list
const play_buttons = document.querySelectorAll('.play_button');
const game_button = document.querySelector('#game_button')

// add click event listener for every play button
// which calls move function on click
play_buttons.forEach((play_button) => {

  play_button.addEventListener('click', move);
});