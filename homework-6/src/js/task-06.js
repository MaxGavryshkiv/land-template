const validationInput = document.querySelector("#validation-input");
// console.log(validationInput.dataset.length);
const validLength = validationInput.dataset.length;

validationInput.addEventListener("blur", onBlurListener);
validationInput.addEventListener("focus", onFocusListener);

function onBlurListener(e) {
  if (e.currentTarget.value.length === Number(validLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
    return;
  }
  validationInput.classList.remove("valid");
  validationInput.classList.add("invalid");
}

function onFocusListener() {
  validationInput.classList.remove("valid", "invalid");
}
