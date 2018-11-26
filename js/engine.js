/* Variables we need for the game */

var choices = ["rock", "paper", "scissors"];


var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

/* Listen for Player choice */

$("button").click(function(event) {
  var play_you = this.getAttribute("value");
  $("#play_you").text(play_you);
  // return computer_thinks();
  return computer_move();
  
   

})

/* Calculate computer_move() math */

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  return play_machine;
  
}

/* Compare two players choices */

function compare(you, machine){

  var verdict = 'lose';

  if ( you == machine ) {
    verdict = 'draw';
  }

  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }

  if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }

  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  if ( verdict == 'win') {
    $("#game_won").text(verdict);
  }

  if ( verdict == 'lose') {
    $("#game_lost").text(verdict);
  }
  if ( verdict == 'draw') {
    $("#game_draw").text(verdict);
  }

  return verdict;

}