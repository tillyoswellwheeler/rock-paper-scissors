const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rp";
    case "pr";
    case "sp";
      console.log("User wins.");
      break;
    case "rp";
    case "ps";
    case "sr";
      console.log("Comp wins");
      break;
    case "rr";
    case "pp";
    case "ss";
      console.log("It's a draw!");
      break;  
  }
}


function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  
  })

  scissors_div.addEventListener('click', function() {
    game("s");

  })
}

main();