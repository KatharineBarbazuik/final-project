var arrows = document.querySelectorAll('.btntohide');
var answers = document.querySelectorAll('.faq_answer');

arrows.forEach((item, i) => {
  item.addEventListener('click', () => {
    answers[i].classList.toggle('d-block')
  })
})
