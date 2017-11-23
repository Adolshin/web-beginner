$(document).ready(function () {
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
});
