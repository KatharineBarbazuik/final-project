var answer = document.querySelector('.faq_answer');
var open = document.querySelector('.btntohide');

answer.style.display = 'none';

open.addEventListener('click', function() {
  if(answer.style.display == 'none') answer.style.display = 'block';
  else answer.style.display = 'none';
});