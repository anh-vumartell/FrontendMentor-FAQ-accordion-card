const accordionQuestion = document.getElementsByClassName(
  "accordion__item--question"
);
let i;

for (i = 0; i < accordionQuestion.length; i++) {
  accordionQuestion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
