const startBttnRef = document.querySelector('[data-start]');
const stopBttnRef = document.querySelector('[data-stop]');
const body = document.body;
let intervalId;

startBttnRef.addEventListener('click', startSwichColor);
stopBttnRef.addEventListener('click', stopSwichColor);

stopBttnRef.disabled = true;

function startSwichColor() {
  startBttnRef.disabled = true;
  stopBttnRef.disabled = false;
  intervalId = setInterval(() => (body.style.backgroundColor = getRandomHexColor()), 1000);
}

function stopSwichColor() {
  startBttnRef.disabled = false;
  stopBttnRef.disabled = true;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
