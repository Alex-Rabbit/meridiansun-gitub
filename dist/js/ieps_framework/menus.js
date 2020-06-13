/*
--------------------------------------------------
  ./dist/js/app.js
    JS des menus
--------------------------------------------------
*/

/*
---------------------------
  Menus dropdown & slider
---------------------------
*/

// Toggle sur le .visible sur le .menu-dropdown-menu / .menu-slider-menu
function toggleVisible(btnClass, elementClass) {
  const btns = document.querySelectorAll(btnClass);
  for (let btn of btns) {
    btn.addEventListener('click', function() {
      this.parentElement.querySelector(elementClass).classList.toggle('visible');
      removeVisible(btnClass, elementClass);
    });
  }
}

// Supprimer le .visible quand on clique sur autre chose qu'un .menu-dropdown-btn / .menu-slider-menu
function removeVisible(btnClass, elementClass) {
  window.addEventListener('click', function(e) {
    // Si ce n'est pas le btn
    if (!(e.target.matches(btnClass) || e.target.closest(btnClass))) {
      document.querySelector(elementClass).classList.remove('visible');
    }
  });
}
// Toggle .visible sur le .menu-dropdown-menu
toggleVisible('.menu-dropdown-btn', '.menu-dropdown-menu');

// Toggle .visible sur le .menu-slider-menu
toggleVisible('.menu-slider-btn', '.menu-slider-menu');

/*
-------------------------
      Menu Select
-------------------------
*/
function change_url(value) {
  window.location = value;
}
