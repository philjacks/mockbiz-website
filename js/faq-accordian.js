// FAQ Accordian
const questions = document.querySelectorAll("summary");

questions.forEach((item) => {
  item.addEventListener("click", () => {
    item.firstElementChild.classList.toggle("arrow-flip");
    item.classList.toggle("active");
  });
})