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


$('#toggle').click(function() {
  $(this).toggleClass('hamburger-menu_active');
  $('#overlay').toggleClass('overlay_open');
  $('body').toggleClass('body-active-menu');
});
