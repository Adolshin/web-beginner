// let menu = (function(options) {

//   let button = document.querySelector(options.button);
//   let menu = document.querySelector(options.menu);
//   let body = document.querySelector('body');

//   let _toggleMenu = function(e) {
//     button.classList.toggle('hamburger-menu_active');
//     menu.classList.toggle('overlay_open');
//     body.classList.toggle('body-active-menu');
//   }

//   let addListeners = function() {
//     button.addEventListener('click', _toggleMenu);
//   }

//   return {
//     init: addListeners
//   };
// })({
//   button: '#toggle',
//   menu: '#overlay'
// });

// menu.init();


$('.hamburger-menu').click(function() {
  $(this).toggleClass('hamburger-menu_active');
  $('.overlay').toggleClass('overlay_open');
  $('body').toggleClass('disabled-onepage-scroll');    
});
$('.overlay-menu__link').click(function(e){  
  e.preventDefault();
  $('.hamburger-menu').removeClass('hamburger-menu_active');
  $('body').removeClass('disabled-onepage-scroll'); 
  $('.overlay').removeClass('overlay_open');    
});
