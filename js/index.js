// Truspilot Carousel
const carouselCont = document.querySelector(".carousel-container");
const carouselSlider = document.querySelector(".carousel-slider");
const cards = document.querySelectorAll(".card");

const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

let counter = 1;
let width = 474;

carouselSlider.style.transform = `translateX(-${width * counter}px`;

prevArrow.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
});

nextArrow.addEventListener("click", () => {
  if (counter >= cards.length - 2) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
});

carouselSlider.addEventListener("transitionend", () => {
  if (cards[counter].id === "last-clone") {
    carouselSlider.style.transition = "none";
    counter = cards.length - 3;
    carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
  }

  if (cards[counter].id === "first-clone") {
    carouselSlider.style.transition = "none";
    counter = cards.length - counter - 1;
    carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
  }
});

// Reduce amount of cards for responsiveness
const media1 = window.matchMedia(`(max-width: 1550px)`);
const media2 = window.matchMedia(`(max-width: 1070px)`);
const media3 = window.matchMedia(`(min-width: 1550px)`);


const reduceCarouselSize1 = (media) => {
  if (media.matches) {
    carouselCont.style.width = `950px`;
  } else {
    carouselCont.style.width = `1425px`;
  }
};

const reduceCarouselSize2 = (media) => {
  if (media.matches) {
    carouselCont.style.width = `475px`;
  } else {
    carouselCont.style.width = `950px`;
  }
};

const increaseCarouselSize = (media) => {
  if (media.matches) {
    carouselCont.style.width = `1425px`;
  }
};

media1.addListener(reduceCarouselSize1);
media2.addListener(reduceCarouselSize2);
media3.addListener(increaseCarouselSize);


reduceCarouselSize1(media1);
reduceCarouselSize2(media2);
increaseCarouselSize(media3);




// Mailing List Authentication 
const mailListEmail = document.querySelector('#mail-list-email');
const mailListSubmit = document.getElementById('mail-list-submit')
const mailListAlert = document.querySelector('#mail-list-alert')

let invalidText = document.createElement('p')

const validateMailListEmail = (emailField) => {

  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false) {
    invalidText.textContent = `Please provide a valid email address.`
    mailListAlert.appendChild(invalidText);
    mailListEmail.value = "";

    return false;
  } else if (!reg.test(emailField.value) == false) {

    invalidText.textContent = `Thanks! Please check your inbox shortly for our latest update.`;
    mailListAlert.appendChild(invalidText);
    mailListEmail.value = "";
    return true;
  }
}

mailListSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  validateMailListEmail(mailListEmail)
})