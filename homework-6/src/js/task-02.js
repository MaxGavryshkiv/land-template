const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUlRef = document.getElementById("ingredients");

const markup = ingredients.map((el) => `<li class="item">${el}</li>`).join("");

ingredientsUlRef.insertAdjacentHTML("beforeend", markup);
