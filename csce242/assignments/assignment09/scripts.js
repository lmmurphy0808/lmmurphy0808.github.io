let intervalId;
let currentPosition = 0;
const numSteps = 10;
const stairsElement = document.getElementById('stairs');
const stickFigureElement = document.getElementById('stick-figure');

const drawStairs = () => {
  stairsElement.innerHTML = ''; 
  for (let i = 0; i < numSteps; i++) {
    const step = document.createElement('div');
    step.classList.add('step');
    stairsElement.appendChild(step);
  }
  document.querySelector('button:nth-of-type(2)').style.display = 'inline-block'; 
};

const climbStairs = () => {
  currentPosition = 0;
  stickFigureElement.style.backgroundImage = 'url("images/leftClimb.png")'; 

  intervalId = setInterval(() => {
    if (currentPosition >= numSteps) {
      clearInterval(intervalId); 
      return;
    }

    if (currentPosition % 2 === 0) {
      stickFigureElement.style.backgroundImage = 'url("images/leftClimb.png")';
    } else {
      stickFigureElement.style.backgroundImage = 'url("images/rightClimb.png")';
    }

    stickFigureElement.style.bottom = `${currentPosition * 20}px`;
    currentPosition++; 

  }, 500); 
};

document.querySelector('button:nth-of-type(1)').addEventListener('click', drawStairs);
document.querySelector('button:nth-of-type(2)').addEventListener('click', climbStairs);
