// selecting elements
const leftside = document.getElementById("p0");
const rightside = document.getElementById("p1");
const player0 = document.getElementById("player-0-CurrentScore");
const player1 = document.getElementById("player-1-CurrentScore");
const dicebtn = document.getElementById("dicebtn");
const diceicon = document.querySelector(".dice");
const holdScore = document.getElementById("hold");
// prerequisite
let score = [0, 0];
let activeplayer = 0;
let CurrentScore = 0;
player0.textContent = 0;
player1.textContent = 0;
diceicon.classList.add("hide-element");

//whenever dice button is clicked
dicebtn.addEventListener("click", function () {
  //generating the dice roll
  let rolledNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(rolledNumber);

  //display the dice icon
  diceicon.classList.remove("hide-element");
  diceicon.src = `/icons/roll${rolledNumber}.png`;

  // when the rolledNumber is 1
  if (rolledNumber != 1) {
    CurrentScore += rolledNumber;
    document.getElementById(`player-${activeplayer}-CurrentScore`).textContent =
      CurrentScore;
  } else {
    document.getElementById(
      `player-${activeplayer}-CurrentScore`
    ).textContent = 0;
    CurrentScore = 0;
    CurrentScore += rolledNumber;
    activeplayer = activeplayer === 0 ? 1 : 0;
    leftside.classList.toggle("activeplayer");
    rightside.classList.toggle("activeplayer");
  }
  if (activeplayer === 0 && window.matchMedia("(max-width: 537px)").matches) {
    holdScore.classList.add("holdBtn");
    holdScore.classList.remove("hiddenHold");
    dicebtn.classList.remove("hiddenDice");
    dicebtn.classList.add("diceBtn");
  }
  if (activeplayer === 1 && window.matchMedia("(max-width: 537px)").matches) {
    holdScore.classList.remove("holdBtn");
    holdScore.classList.add("hiddenHold");
    dicebtn.classList.add("hiddenDice");
    dicebtn.classList.remove("diceBtn");
  }
});

// reset button functionality
document.getElementById("reset").addEventListener("click", function () {
  location.reload(true);
});

// HOLD BUTTON FUNCTIONALITY
holdScore.addEventListener("click", function () {
  // store the score in the score array for each player
  score[activeplayer] += CurrentScore;
  document.querySelector(`.score${activeplayer}`).textContent =
    score[activeplayer];

  // check if the active player wins or not
  if (score[activeplayer] >= 50) {
    document.querySelector(`.score${activeplayer}`).textContent = "Winner!🥇";
    document.getElementById(`p${activeplayer}`).classList.add("winnerplayer");
    holdScore.disabled = true;
    dicebtn.disabled = true;
  }
  // reset the current score
  document.getElementById(
    `player-${activeplayer}-CurrentScore`
  ).textContent = 0;
  CurrentScore = 0;
  // change the active player
  activeplayer = activeplayer === 0 ? 1 : 0;
  leftside.classList.toggle("activeplayer");
  rightside.classList.toggle("activeplayer");
  if (activeplayer === 0 && window.matchMedia("(max-width: 537px)").matches) {
    holdScore.classList.add("holdBtn");
    holdScore.classList.remove("hiddenHold");
    dicebtn.classList.remove("hiddenDice");
    dicebtn.classList.add("diceBtn");
  }
  if (activeplayer === 1 && window.matchMedia("(max-width: 537px)").matches) {
    holdScore.classList.remove("holdBtn");
    holdScore.classList.add("hiddenHold");
    dicebtn.classList.add("hiddenDice");
    dicebtn.classList.remove("diceBtn");
  }
});
