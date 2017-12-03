//Гамбургер-меню
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
  
//состав
$('.burgers__consist').click(function() {
    $(this).toggleClass('burgers__consist_active');
    $(this).children('.burgers__consist-popup').toggleClass('burgers__consist-popup_open');    
  });
//аккордеон команда
let accoteam = document.querySelector('.team-acco'),
listteam = accoteam.children

accoteam.addEventListener('click', function (event) {
let target = event.target
if (!target.classList.contains('team-acco__trigger')) {
    return
}

event.preventDefault()
target = target.parentNode
if (target.classList.contains('team-acco__item_active')) {
    target.classList.remove('team-acco__item_active')
    return
} else {
    for (var i = 0; i < listteam.length; i++) {
        listteam[i].classList.remove('team-acco__item_active')
        target.classList.add('team-acco__item_active')
    }
}
});
//аккордеон меню
let accomenu = document.querySelector('.menu__list'),
listmenu = accomenu.children

accomenu.addEventListener('click', function (event) {
let target = event.target
if (!target.classList.contains('menu__title')) {
    return
}

event.preventDefault()
target = target.parentNode
if (target.classList.contains('menu__item_active')) {
    target.classList.remove('menu__item_active')
    return
} else {
    for (var i = 0; i < listmenu.length; i++) {
        listmenu[i].classList.remove('menu__item_active')
        target.classList.add('menu__item_active')
    }
}
});
//крестик меню
$('.cross_menu').click(function() {
    $('.menu__item').removeClass('menu__item_active'); 
  });
//модалка отзывы
$('.comment__button').click(function(e) {
    e.preventDefault();    
    $('.reviews-overlay').addClass('reviews-overlay_open');  
    // $('body').addClass('body-active-menu');
    $(this).parents(".reviews__item").addClass("reviews__item_active");     
    $('body').addClass('disabled-onepage-scroll-reviews');  
});

$('.cross_reviews').click(function() {
    // $('body').removeClass('body-active-menu');
    $('.reviews-overlay').removeClass('reviews-overlay_open');     
    $('.reviews__item_active').removeClass('reviews__item_active');   
    $('body').removeClass('disabled-onepage-scroll-reviews');      
  });
//модалка заказ
$('.clear-btn').click(function (e) {
    e.preventDefault();
    $('#order-form')[0].reset();
});
$('.order-btn_order').click(function (e) {
    e.preventDefault();
    $('.order-overlay').addClass('order-overlay_open');
    // $('body').addClass('body-active-menu'); 
    $('body').addClass('disabled-onepage-scroll-order');
    $('#order-form').submit();
});

$('.order-btn_close').click(function (e) {
    e.preventDefault();
    // $('body').removeClass('body-active-menu');
    $('.order-overlay').removeClass('order-overlay_open');
    $('body').removeClass('disabled-onepage-scroll-order');
    $('.message').remove();
});
//обработка формы
var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action');

 
    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });
    request.done(function (msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            $('.order-overlay__text').append('<p class="message">' + mes + '</p>');
        } else {
            $('.order-overlay__text').append('<p class="message">' + mes + '</p>');
        }
    });
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed:" + textStatus)
    });
};
$('#order-form').on('submit', submitForm);

//настройка плагина слайер
// $(document).ready(function () {
    slider = $('.burgers__list').bxSlider({
        pager : false, 
        speed : 400       
    });
    $('.arrow_right').on('click', function(e){
        e.preventDefault();
        slider.goToNextSlide();
    });
    $('.arrow_left').on('click', function(e){
        e.preventDefault();
        slider.goToPrevSlide();
    });
// });
//настройка плагина ОПС
// $(document).ready(function () {
    $(".maincontent").onepage_scroll({
        sectionContainer: ".section",
        easing: "ease",
        animationTime: 700,
        
        loop: false,
        pagination: true,
        updateURL: false,
        keyboard: true,
        responsiveFallback: false,
        direction: "vertical"
    });
    $('.page1').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(1);
    });
    $('.page2').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(2);
    });
    $('.page3').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(3);
    });
    $('.page4').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(4);
    });
    $('.page5').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(5);
    });
    $('.page6').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(6);
    });
    $('.page7').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(7);
    });
    $('.page8').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveTo(8);
    });
    $('.arrow-down').on('click', function(e){
        e.preventDefault();
        $(".maincontent").moveDown();
    });
// });

//настройка google maps
(function() {
    var markerImage = new google.maps.MarkerImage(
            '../img/contacts/map-marker.svg',
            new google.maps.Size(46, 57),
            new google.maps.Point(0, 0),
            new google.maps.Point(23, 57)
        );
		var objects = [
            {
                str: 'Test!',
                // coords: new google.maps.LatLng(59.945396, 30.382825)
                coords: new google.maps.LatLng(55.757358 , 37.656884)
            },
            {
                str: 'Test2!',
                // coords: new google.maps.LatLng(59.888716, 30.311712)
                coords: new google.maps.LatLng(55.752139, 37.601395)
            },
            {
                str: 'Test3!',
                // coords: new google.maps.LatLng(59.971920, 30.313874)
                coords: new google.maps.LatLng(55.729836, 37.635555)
            },
            {
                str: 'Test4!',
                // coords: new google.maps.LatLng(59.917428, 30.491673)
                coords: new google.maps.LatLng(55.79414, 37.616158)
            }
        ];
		var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            scrollwheel: false,
            center: {
                // lat: 59.939764,
                // lng: 30.350236  
                lat: 55.753975,
                lng: 37.620792                    
            }
        })
		for (var i = 0; i < objects.length; i++) {
    	var placeMark = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: objects[i].coords,
            icon: markerImage,
            map: map,
            title: objects[i].str
        })
    }
})();
