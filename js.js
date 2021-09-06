//Select the score of each player.
let playerOneScore = document.querySelector("#player-one-score");
let playerTwoScore = document.querySelector("#player-two-score");
let winningScoreValue = document.querySelector("#winningScore");

//Create the onclick event to add poits each time and check if a player has reached the winning score.
const playerOnePoint = document.querySelector(".button--green");
playerOnePoint.addEventListener("click", addPointsOne);

function addPointsOne() {
    playerOneScore.innerText = parseInt(document.querySelector("#player-one-score").innerText) + 1;
    if (playerOneScore.innerText == winningScoreValue.value) {
        alert("Player One wins! Reset to start a new game.");
    }
}

const playerTwoPoint = document.querySelector(".button--blue");
playerTwoPoint.addEventListener("click", addPointsTwo);

function addPointsTwo() {
    playerTwoScore.innerText = parseInt(document.querySelector("#player-two-score").innerText) + 1;
    if (playerTwoScore.innerText == winningScoreValue.value) {
        alert("Player One wins! Reset to start a new game.");
    }
}

//Create the reset button
const resetScore = document.querySelector(".button--red");
resetScore.onclick = function() {
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
}