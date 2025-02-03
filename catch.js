const targetButton = document.getElementById("target-button");
const scoreDisplay = document.getElementById("score");
const timeLeftDisplay = document.getElementById("time-left");
 
let score = 0;
let timeLeft = 10;
let gameInterval;
let moveInterval;
 

function startGame() {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = timeLeft;
 

  moveInterval = setInterval(moveButton, 500);
 
  
  gameInterval = setInterval(updateTimer, 1000);
}
 

function moveButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  targetButton.style.position = "absolute";
  targetButton.style.left = `${x}px`;
  targetButton.style.top = `${y}px`;
}
 

function updateTimer() {
  timeLeft--;
  timeLeftDisplay.textContent = timeLeft;
 
  if (timeLeft === 0) {
    endGame();
  }
}
 

function endGame() {
  clearInterval(moveInterval);
  clearInterval(gameInterval);
  alert(`Game Over! Your score is ${score}.`);
  targetButton.style.display = "none";
}
 

targetButton.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});
 

window.onload = startGame;


