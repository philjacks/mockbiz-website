// Form input selectors
const form = document.querySelector('form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const contactFormEmail = document.querySelector('#contact-form-email')
const phone = document.querySelector('#phone')
const message = document.querySelector('#message')


// Form Submission
form.addEventListener('submit', (e) => {
  ValidateFirstName(firstName)
  ValidateLastName(lastName)
  validateContactFormEmail(contactFormEmail)
  validatePhoneNum(phone)
  e.preventDefault()
})

// Validate First Name
const ValidateFirstName = (firstName) => {
  const firstNameErr = document.querySelector('#first-name-error')

  if (firstName.value === '') {
    firstNameErr.innerHTML = `Please provide your first name`
  } else {
    firstNameErr.remove()
  }
}

// Validate Last Name
const ValidateLastName = (lastName) => {
  const lastNameErr = document.querySelector('#last-name-error')

  if (lastName.value === '') {
    lastNameErr.innerHTML = `Please provide your last name`
  } else {
    lastNameErr.remove()
  }
}

// Validate Contact Form Email
const validateContactFormEmail = (emailField) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const contactFormEmailErr = document.querySelector('#contact-form-email-error')

  if (reg.test(emailField.value) == false || emailField.value === '') {
    contactFormEmailErr.innerHTML = `Please provide a valid email address`

    return false;
  } else if (!reg.test(emailField.value) == false) {
    contactFormEmailErr.remove()

    return true;
  }
}

// Validate Phone Number
const validatePhoneNum = (phone) => {
  const phoneErr = document.querySelector('#phone-error')

  if (phone.value === '') {
    phoneErr.innerHTML = `Please provide your phone number`
  } else {
    phoneErr.remove()
  }
}

// Google Maps
function initMap() {
  let options = {
    zoom: 8,
    center: { lat: 54.8959, lng: -1.8919 }
  }

  let map = new google.maps.Map(document.getElementById('map'), options);

  let marker = new google.maps.Marker({
    position: { lat: 54.9117, lng: -1.9186 },
    map: map
  });
}