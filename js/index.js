// // Flickity Carousel
// const carousel = document.querySelector('.main-carousel')

// const flkty = new Flickity(carousel, {
//   wrapAround: true,
// })


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