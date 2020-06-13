/*
--------------------------------------------------
        ./dist/js/utils_scroll_trigger.js
        JS des élements scroll triggered
--------------------------------------------------
*/
const observer = new IntersectionObserver(function(observables) {
  for (let observable of observables) {
    if (observable.isIntersecting) {
      observable.target.classList.add('visible');
    }
  }
}, {
  threshold: .8
});

const triggers = document.querySelectorAll('.scroll-trigger');
for (let trigger of triggers) {
  observer.observe(trigger);
}
