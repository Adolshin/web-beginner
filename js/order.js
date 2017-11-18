$('.order-btn_order').click(function(e) {
    e.preventDefault();    
    $('.order-overlay').addClass('order-overlay_open');  
    $('body').addClass('body-active-menu');   
    // $(this).addClass('order-btn_order_active'); 
});

$('.order-btn_close').click(function(e) {
    e.preventDefault();  
    $('body').removeClass('body-active-menu');
    $('.order-overlay').removeClass('order-overlay_open'); 
    // $('.order-btn_order').removeClass('order-btn_order_active');     
  });