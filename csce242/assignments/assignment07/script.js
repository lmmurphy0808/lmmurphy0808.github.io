/* Hello Button */
const helloButton = document.getElementById('helloButton');
const container = document.querySelector('.container'); // Select the container

helloButton.addEventListener('click', () => {
  const newHello = document.createElement('div'); // Create a new div element
  newHello.classList.add('popup'); // Add the 'popup' class for styling
  newHello.textContent = 'Hello!'; // Set the text of the new "Hello!" message
  container.appendChild(newHello); // Append the new "Hello!" message to the container
});

/* Color Selector */
const colorSelector = document.getElementById('colorSelector');
const star = document.getElementById('star');

colorSelector.addEventListener('input', (event) => {
    star.style.backgroundColor = event.target.value;
});

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);  // Generates a random color in hex format
    return randomColor;
}

/* Random Image Generator */
const image = document.getElementById('image');

image.addEventListener('click', () => {
    image.src = `https://picsum.photos/200/200?random=${Math.random()}`; 
});