// Scroll Desktop Nav
const navbar = document.querySelectorAll('nav');

navbar.forEach((item) => {
  window.addEventListener('scroll', (e) => {
    item.classList.add('desk-nav')
    item.classList.add('fixed-nav')
  })
})

// Toggle Mob Nav View
const mobIcons = document.querySelectorAll('.mob-icon')
const mobMenu = document.querySelectorAll('.nav-items')

mobIcons.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('flipped')

    mobMenu.forEach((menu) => {
      menu.classList.toggle('mob-nav-active')
    })
  })
})