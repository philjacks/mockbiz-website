// Flickity Carousel
const carousel = document.querySelector('.main-carousel')

const flkty = new Flickity(carousel, {
  wrapAround: true

})

// // Reduce carousel width for responsiveness
// const media1 = window.matchMedia(`(max-width: 1550px)`);
// const media2 = window.matchMedia(`(max-width: 600px)`);
// const media3 = window.matchMedia(`(min-width: 1550px)`);


// const reduceCarouselSize1 = (media) => {
//   if (media.matches) {
//     carousel.style.width = `95%`;
//   } else {
//     carousel.style.width = `90%`;
//   }
// };

// const reduceCarouselSize2 = (media) => {
//   if (media.matches) {
//     carousel.style.width = `99%`;
//   } else {
//     carousel.style.width = `90%`;
//   }
// };

// const increaseCarouselSize = (media) => {
//   if (media.matches) {
//     carousel.style.width = `75%`;
//   }
// };

// media1.addListener(reduceCarouselSize1);
// media2.addListener(reduceCarouselSize2);
// media3.addListener(increaseCarouselSize);


// reduceCarouselSize1(media1);
// reduceCarouselSize2(media2);
// increaseCarouselSize(media3);


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