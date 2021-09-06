//Select the score of each player and change it to a number, since it was a string!
let playerOneScore = document.querySelector("#player-one-score");
let playerTwoScore = document.querySelector("#player-two-score");

//Create the onclick event to add poits each time
const playerOnePoint = document.querySelector(".button--green");
playerOnePoint.onclick = function() {
    playerOneScore.innerText = parseInt(document.querySelector("#player-one-score").innerText) + 1;
}

const playerTwoPoint = document.querySelector(".button--blue");
playerTwoPoint.onclick = function() {
    playerTwoScore.innerText = parseInt(document.querySelector("#player-two-score").innerText) + 1;
}

//Create the reset button
const resetScore = document.querySelector(".button--red");
resetScore.onclick = function() {
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
}