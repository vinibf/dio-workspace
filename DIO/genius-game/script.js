let isGameRunning;
let colorSequence;
let selectedSequence;
let score;

const colorMapping = {
  0: document.querySelector(".green"),
  1: document.querySelector(".red"),
  2: document.querySelector(".yellow"),
  3: document.querySelector(".blue"),
};

const playElement = document.querySelector(".play-btn");
const scoreElement = document.querySelector(".score-info p");

const resetGame = () => {
  isGameRunning = false;
  colorSequence = [];
  selectedSequence = [];
  score = 0;
  scoreElement.textContent = score;
};

const generateRandomSequence = (sequenceLength = 4) => {
  let generatedSequence = [];

  for (let i = 0; i < sequenceLength; i++) {
    generatedSequence[i] = Math.floor(Math.random() * 4);
  }

  return generatedSequence;
};

const lightUpColor = (colorElement, milliseconds) => {
  setTimeout(() => {
    colorElement.classList.add("selected");
  }, milliseconds - 250);

  setTimeout(() => {
    colorElement.classList.remove("selected");
  }, milliseconds - 250 + 500);
};

const validateClickedColor = () => {
  const index = selectedSequence.length - 1;

  return selectedSequence[index] === colorSequence[index];
};

const setScore = () => {
  score = (selectedSequence.length / colorSequence.length) * 100;
  scoreElement.textContent = `${score}%`;
};

const handleClickColor = (e, index) => {
  if (isGameRunning) {
    lightUpColor(e.target, 500);

    selectedSequence.push(Number(index));

    if (!validateClickedColor()) {
      alert(`You Lose\nSua pontuação foi: ${scoreElement.textContent}`);
      isGameRunning = false;
      return;
    }

    setScore();

    if (selectedSequence.length === colorSequence.length) {
      alert(`You Win\nSua pontuação foi: ${scoreElement.textContent}`);
      isGameRunning = false;
    }
  }
};

const playGame = () => {
  resetGame();
  isGameRunning = true;

  colorSequence = generateRandomSequence();
  console.log(colorSequence);

  colorSequence.forEach((colorNumber, index) =>
    lightUpColor(colorMapping[colorNumber], (Number(index) + 1) * 1000)
  );
};

playElement.addEventListener("click", playGame);

for (const index in colorMapping) {
  colorMapping[index].addEventListener("click", (e) =>
    handleClickColor(e, index)
  );
}

// Pedir para selecionar dificuldade (nivel)
//  - maior dificuldade mais cores acendem e mais rápido
