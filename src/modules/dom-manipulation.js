const nextImage = document.querySelector(".next-picture");
const previousImage = document.querySelector(".previous-picture");
const divDots = document.querySelector(".dots");

function createButton() {
  const button = document.createElement("button");
  return button;
}

function selectElement(elementClass) {
  const element = document.querySelector(elementClass);
  return element;
}

function backgroundImage(element, image) {
  element.style.backgroundImage = `url(${image})`;
}

export {
  nextImage,
  previousImage,
  divDots,
  createButton,
  selectElement,
  backgroundImage,
};
