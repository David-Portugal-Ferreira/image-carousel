import * as dom from "./dom-manipulation";

const images = [
  "https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg",
];

let currentImage = 0;

images.forEach((image, index) => {
  const button = dom.createButton();
  button.classList.add("image-buttons");
  button.innerText = ".";
  button.addEventListener("click", () => {
    dom.backgroundImage(imageCarousel, images[index]);
    buttonChangeColor(index);
    currentImage = index;
  });
  dom.divDots.appendChild(button);
});

const imageCarousel = dom.selectElement(".image-carousel");
dom.backgroundImage(imageCarousel, images[currentImage]);
buttonChangeColor(currentImage);

function nextImage(element) {
  element.addEventListener("click", () => {
    incrementImageIndex();
    dom.backgroundImage(imageCarousel, images[currentImage]);
    buttonChangeColor(currentImage);
  });
  setInterval(() => {
    element.click()
}, 5000)
}

function previousImage(element) {
  element.addEventListener("click", () => {
    decrementImageIndex();
    dom.backgroundImage(imageCarousel, images[currentImage]);
    buttonChangeColor(currentImage);
  });
}

function incrementImageIndex() {
  ++currentImage;
  if (currentImage === images.length) currentImage = 0;
}

function decrementImageIndex() {
  --currentImage;
  if (currentImage < 0) currentImage = images.length - 1;
}

function buttonChangeColor(currentIndex) {
  const buttons = dom.divDots.querySelectorAll("button");
  buttons.forEach((button, index) => {
    if (index === currentIndex) {
      button.style.background = "red";
      button.style.color = "red";
    } else {
      button.style.background = "lightgrey";
      button.style.color = "lightgrey";
    }
  });
}

export { imageCarousel, nextImage, previousImage };
