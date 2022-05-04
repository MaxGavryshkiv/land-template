const nameInputRef = document.getElementById("name-input");
const spanNameRef = document.getElementById("name-output");

nameInputRef.addEventListener("input", nameValue);

function nameValue(e) {
  if (e.currentTarget.value === "") {
    spanNameRef.textContent = "Anonymous";
    return;
  }
  spanNameRef.textContent = e.currentTarget.value;
}
