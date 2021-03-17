const accordionQuestions = document.querySelectorAll(".accordion--question");

const items = document.querySelectorAll(".accordion__item");
accordionQuestions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const currentItem = e.currentTarget.closest(".accordion__item");
    items.forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("reveal-answer");
      }
    });
    currentItem.classList.toggle("reveal-answer");
  });
});
