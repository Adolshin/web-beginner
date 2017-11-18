$('.comment__button').click(function(e) {
    e.preventDefault();
    
    $('.reviews-overlay').addClass('reviews-overlay_open');  
    $('body').addClass('body-active-menu');
    $(this).parents(".reviews__item").addClass("reviews__item_active");   
    // $(this).parents(".reviews__item").removeClass("reviews__item"); 
});

$('.cross_reviews').click(function() {
    $('body').removeClass('body-active-menu');
    $('.reviews-overlay').removeClass('reviews-overlay_open'); 
    // $('.reviews__item_active').addClass('reviews__item'); 
    $('.reviews__item_active').removeClass('reviews__item_active');   
  });