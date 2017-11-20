// let popup = (function (options) {

//     let consist = document.querySelector(options.consist);
//     let popup = document.querySelector(options.popup);
//     //   let body = document.querySelector('body');

//     let _toggleMenu = function (e) {
//         consist.classList.toggle('burgers__consist_active');
//         popup.classList.toggle('burgers__consist-popup_open');
//         // body.classList.toggle('body-active-menu');
//     }

//     let addListeners = function () {
//         consist.addEventListener('click', _toggleMenu);
//     }

//     return {
//         init: addListeners
//     };
// })({
//     consist: '.burgers__consist',
//     popup: '.burgers__consist-popup'
// });

// popup.init();
$('.burgers__consist').click(function() {
    $(this).toggleClass('burgers__consist_active');
    $(this).children('.burgers__consist-popup').toggleClass('burgers__consist-popup_open');    
  });
  