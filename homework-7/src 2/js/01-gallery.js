import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
let instance;

markupCreator(galleryItems);

//function for create markup
function markupCreator(ItemsRef) {
  const items = [];

  ItemsRef.forEach((el) => {
    const item = `<div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`;

    items.push(item);
  });

  galleryRef.innerHTML = items.join("");
}

//events for gallery div
galleryRef.addEventListener("click", openModal);

//function open modal
function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = e.target.dataset.source;
  instance = basicLightbox.create(`
  <img width="1200" src="${largeImg}">
`);

  instance.show();
  window.addEventListener("keydown", closeModal);
}

//function close modal for key
function closeModal(e) {
  if (e.code === "Escape") {
    console.log("out");
    instance.close();
    window.removeEventListener("keydown", closeModal);
  }
}
