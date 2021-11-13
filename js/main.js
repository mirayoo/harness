//MOBILE MENU

$(".navToggle").on("click", function(){
    $(this).toggleClass("open");
  $("#mobile-menu").toggleClass("active");
  })

//Tabs
$(".tab").click(function() {
	$("#catalog .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(2).addClass("active");

//Size selection

$( '.sizeselect' ).click (function() {
    $( this ).not('.inactive').toggleClass( 'active' ).siblings().removeClass( 'active' )
});

//Image Slider

var swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 600,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }
  });

  //Popup

  $('.card a.card-btn').click(function(event) {
    $('#product-btn').modal({
      fadeDuration: 250,
      fadeDelay: 1,
      closeClass: 'icon-remove',
      closeText: '!'
    });
    return false;
  });


// Popup Content

$('.card-btn').on('click', function(){
    
  $('#product-btn .popup-img').html('<img src="'+$(this).closest('.card').find('img').attr('src')+'" />');
  $('#product-btn .popup-title h3').html($(this).closest('.card').find('h3').text());
  $('#product-btn .old-price').html($(this).closest('.card').find('.old-price').text());
  $('#product-btn .new-price').html($(this).closest('.card').find('.new-price').text());
  $('#product-btn .popup-size span').html($(this).closest('.card').find('.sizeselect.active').text());
});

$('.sizeselect').on('click',function(){
 if ($(this).closest('.sizeselect').hasClass('active')) {
  $(this).closest('.card').find('.card-btn').removeClass('disabled');
} else {
  $(this).closest('.card').find('.card-btn').addClass('disabled');
}
});