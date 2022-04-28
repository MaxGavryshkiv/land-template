let counterValue = 0;

const decrBttnRef = document.querySelector('[data-action="decrement"]');
const incrBttnRef = document.querySelector('[data-action="increment"]');
const counterValueSpanRef = document.getElementById("value");

decrBttnRef.addEventListener("click", decrement);
incrBttnRef.addEventListener("click", increment);

function increment() {
  counterValue -= 1;
  counterValueSpanRef.textContent = counterValue;
}

function decrement() {
  counterValue += 1;
  counterValueSpanRef.textContent = counterValue;
}
