// Assets
const playerPaper = document.querySelector("#playerPaper");
const playerRock = document.querySelector("#playerRock");
const playerScissors = document.querySelector("#playerScissors");

const reset = document.querySelector("#reset");

const pcPaper = document.querySelector("#pcPaper");
const pcRock = document.querySelector("#pcRock");
const pcScissors = document.querySelector("#pcScissors");

const resaultStatus = document.querySelector(".status");

let ps = document.querySelector("#ps");
let cs = document.querySelector("#cs");

// score counter
let psNum = 0;
csNum = 0;

// flag
let playerPick;
let pcRandom;

// event styles
playerPaper.addEventListener("click", (e) => {
  playerPick = 0;
  e.target.style.filter = "brightness(100%)";
  playerRock.style.filter = "brightness(70%)";
  playerScissors.style.filter = "brightness(70%)";
  pcRandom = Math.round(Math.random() * 2);

  analogy(pcRandom);
  rating(pcRandom, playerPick);
});
playerRock.addEventListener("click", (e) => {
  playerPick = 1;
  e.target.style.filter = "brightness(100%)";
  playerScissors.style.filter = "brightness(70%)";
  playerPaper.style.filter = "brightness(70%)";
  pcRandom = Math.round(Math.random() * 2);

  analogy(pcRandom);
  rating(pcRandom, playerPick);
});
playerScissors.addEventListener("click", (e) => {
  playerPick = 2;
  e.target.style.filter = "brightness(100%)";
  playerPaper.style.filter = "brightness(70%)";
  playerRock.style.filter = "brightness(70%)";
  pcRandom = Math.round(Math.random() * 2);

  analogy(pcRandom);
  rating(pcRandom, playerPick);
});

// computer Coice style
const analogy = (random) => {
  setTimeout(() => {
    if (random === 0) {
      pcPaper.style.display = "block";
      pcRock.style.display = "none";
      pcScissors.style.display = "none";
    } else if (random === 1) {
      pcRock.style.display = "block";
      pcPaper.style.display = "none";
      pcScissors.style.display = "none";
    } else if (random === 2) {
      pcScissors.style.display = "block";
      pcPaper.style.display = "none";
      pcRock.style.display = "none";
    }
  }, 500);
};

// pc/player scores
const playerScore = () => {
  psNum++;
  ps.innerHTML = psNum;
  resaultStatus.textContent = "player win";
};
const computerScore = () => {
  csNum++;
  cs.innerHTML = csNum;
  resaultStatus.textContent = "computer win";
};

// rating engine
const rating = (pcRandom, playerPick) => {
  setTimeout(() => {
    // equel value
    if (playerPick === pcRandom) {
      resaultStatus.textContent = "its draw!";

      // paper and rock
    } else if (playerPick === 0 && pcRandom === 1) {
      playerScore();
    }
    // paper and scissors
    else if (playerPick === 0 && pcRandom === 2) {
      computerScore();
    }
    // rock and paper
    else if (playerPick === 1 && pcRandom === 0) {
      computerScore();
    }
    // rock and scissors
    else if (playerPick === 1 && pcRandom === 2) {
      playerScore();
    }
    // scissors and paper
    else if (playerPick === 2 && pcRandom === 0) {
      playerScore();
    }
    // scissors and rock
    else if (playerPick === 2 && pcRandom === 1) {
      computerScore();
    }
  }, 500);
};

// reset board
reset.addEventListener("click", () => {
  ps.innerHTML = 0;
  cs.innerHTML = 0;
  psNum = 0;
  csNum = 0;
  pcPaper.style.display = "none";
  pcRock.style.display = "none";
  pcScissors.style.display = "none";
});
