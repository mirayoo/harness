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