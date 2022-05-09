import { galleryItems } from "./gallery-items.js";

const galleryUlRef = document.querySelector(".gallery");

createMarkup(galleryItems);

function createMarkup(itemsRef) {
  const items = [];

  itemsRef.forEach((el) => {
    const markup = `<li class="gallery__item"><img class="gallery__image" src="${el.preview}" alt="${el.description}" loading="lazy" /></li>`;
    items.push(markup);
  });
  galleryUlRef.innerHTML = items.join("");
}
