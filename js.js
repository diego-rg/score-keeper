//Select the score of each player and change it to a number, since it was a string!
let playerOneScore = parseInt(document.querySelector("#player-one-score").innerText);
let playerTwoScore = parseInt(document.querySelector("#player-two-score").innerText);

let playerOnePoint = document.querySelector(".button--green");
playerOnePoint.addEventListener("click", function() {
    playerOneScore = playerOneScore + 1;
    )
}