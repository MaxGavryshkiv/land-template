const fontSizeInputRef = document.getElementById("font-size-control");
const labelSpanRef = document.getElementById("text");

fontSizeInputRef.addEventListener("input", fontChanger);

function fontChanger(e) {
  labelSpanRef.style.fontSize = `${e.currentTarget.value}px`;
}
