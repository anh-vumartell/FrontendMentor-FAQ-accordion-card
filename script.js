const accordionQuestion = document.getElementsByClassName(
  "accordion--question"
);


let i;

for (i = 0; i < accordionQuestion.length; i++) {
  accordionQuestion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const accordionAnswer = this.nextElementSibling;
    if(accordionAnswer.style.display === 'block'){
      accordionAnswer.style.display = "none";
      
    } else{
      accordionAnswer.style.display = "block";
      
    }
  });
}

