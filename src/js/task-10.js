const divFormRef = document.getElementById("controls");
const divBoxesRef = document.getElementById("boxes");

divFormRef.addEventListener("click", formEvent);

function formEvent(e) {
  //get value of input
  const value = e.currentTarget.children[0].value;
  //check if target is create button
  if (e.target.dataset.create === "") {
    //check if value is empty cause a alert
    if (value === "") {
      alert("Write the number of elements");
    }
    //check if value isn`t empty to call functions
    if (value !== "" && value <= 100) {
      //call destroy function
      destroyBoxes();
      //call create funtion
      createBoxes(value);
    }
  }
  //check if target is destroy bttn
  if (e.target.dataset.destroy === "") {
    //call destroy function
    destroyBoxes();
  }
}

function destroyBoxes() {
  //clean all elements
  divBoxesRef.innerHTML = "";
}

function createBoxes(amount) {
  //create new array
  const arrayOfDiv = [];
  //start iteration
  for (let i = 30; i < amount * 10 + 30; i += 10) {
    //create new div element
    const newDiv = document.createElement("div");
    //add style for element
    newDiv.style.width = `${i}px`;
    newDiv.style.height = `${i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    //push element in array
    arrayOfDiv.push(newDiv);
  }
  //add elements to DOM
  divBoxesRef.append(...arrayOfDiv);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
