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
    $( this ).not('.inactive').addClass( 'active' ).siblings().removeClass( 'active' )
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

  $(document).ready(function(){
    $('.card-btn').click(function(){ 
      var popupBlock = $('#'+$(this).data('popup'));
      popupBlock.addClass('active')
        $('.popup').click(function(){
          popupBlock.css('opacity','0').find('.popup-content').css('margin-top','350px');  
          setTimeout(function(){
            $('.popup').removeClass('active');
            popupBlock.css('opacity','').find('.popup-content').css('margin-top','');
          }, 600);
        });
   });
  });