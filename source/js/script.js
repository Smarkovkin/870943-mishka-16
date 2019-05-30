var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');


var link = document.querySelector(".button-modal");
var popup = document.querySelector(".modal");

navMain.classList.remove('main-nav--nojs');

document.addEventListener("DOMContentLoaded", function() {
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');
});

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
