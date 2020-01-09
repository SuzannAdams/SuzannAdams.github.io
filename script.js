//to create gameboard, referenced: https://www.youtube.com/watch?v=P2TcQ3h0ipQ
let player = 'X';
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
const messageDiv = document.getElementsByClassName('message')[0];
//give the cells a variable to make easier to retrieve
const square = document.querySelectorAll('.cell');
//console.log(square);

//consulted with Myshawne Stallings on newGame function
function newGame() {
  //empty out squares
  for (let i = 0; i < square.length; i++) {
    square[i].innerHTML = ''; //going through array and clearing out with ''.
  }
  messageDiv.innerText = ''; //to reset the div so the NewGame button will reset
}

//1st make an eventlistener
function clickFn(event) {
  //   console.log(event.target);
  event.target.innerHTML = `${player}`;
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
  threeInRow();
}
//event listener
for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('click', clickFn);
  console.log(square[i]);
}
const disableListener = () =>
  square.forEach(square => square.removeEventListener('click', clickFn));

//per Jennifer use an if else statement to go through winCombos
function threeInRow() {
  if (
    square[0].innerHTML !== '' &&
    square[0].innerHTML === square[1].innerHTML &&
    square[2].innerHTML === square[0].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
    //make a function that checks for a winCombo then stop game and show message 'Winner!'
  } else if (
    square[3].innerHTML !== '' &&
    square[3].innerHTML === square[4].innerHTML &&
    square[5].innerHTML === square[3].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
  } else if (
    square[6].innerHTML !== '' &&
    square[6].innerHTML === square[7].innerHTML &&
    square[8].innerHTML === square[6].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
  } else if (
    square[0].innerHTML !== '' &&
    square[0].innerHTML === square[4].innerHTML &&
    square[8].innerHTML === square[0].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
  } else if (
    square[2].innerHTML !== '' &&
    square[2].innerHTML === square[4].innerHTML &&
    square[6].innerHTML === square[2].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
  } else if (
    square[0].innerHTML !== '' &&
    square[0].innerHTML === square[3].innerHTML &&
    square[6].innerHTML === square[0].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
  } else if (
    square[1].innerHTML !== '' &&
    square[1].innerHTML === square[4].innerHTML &&
    square[7].innerHTML === square[1].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
  } else if (
    square[2].innerHTML !== '' &&
    square[2].innerHTML === square[5].innerHTML &&
    square[8].innerHTML === square[2].innerHTML
  ) {
    message = 'Winner!';
    disableListener();
    console.log(message);
    showMessage();
  } else if (winCombos === null) {
    message = 'Tie, play again.';
    disableListener();
    console.log(message);
    //Jerrica, the last "else if" needs to check if none are empty and would have automatically gone through the no winCombos, then there is a tie. Display message 'Play again.'
  }
}
function showMessage() {
  messageDiv.innerText = message;
} //this function created to show 'Winner!' on the board
