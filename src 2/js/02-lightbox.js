import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
let lightbox;

const galleryRef = document.querySelector(".gallery");

markupCreator(galleryItems);

//function for create markup
function markupCreator(ItemsRef) {
  const items = [];

  ItemsRef.forEach((el) => {
    const item = `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>`;

    items.push(item);
  });

  galleryRef.innerHTML = items.join("");
}

galleryRef.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = e.target.dataset.source;
  const alt = e.target.alt;
  var lightbox = new SimpleLightbox(".gallery a", {
    fadeSpeed: 0,
    animationSpeed: 0,
    captionsData: "alt",
    captionDelay: 250,
    animationSlide: false,
  });
}
