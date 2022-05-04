const changeColorBttnRef = document.querySelector(".change-color");
const whatColorSpanRef = document.querySelector(".color");

changeColorBttnRef.addEventListener("click", changeBgrColor);

function changeBgrColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  whatColorSpanRef.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
