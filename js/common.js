//jQuery Mask
$(function(){
    $("#number").mask("+7 (999) 999-99-99", {placeholder: " "});
  });

//Gallery
$('.diploms').on(`init reInit`, function(event, slick) {
  $('.diploms__arrow').text('0' + 1 + '/' + '0' + slick.slideCount);
})
$('.diploms').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
  $('.diploms__arrow').text('0' + (1 + currentSlide) + '/' + '0' + slick.slideCount);
})
$('.diploms').slick({
  slidesToShow: 1,
  dots: false,
  appendArrows:'.diplom__arrow',
  prevArrow: '<button class="pre-next pre"><img src="./img/right-arrow.png"/></button>',
  nextArrow: '<button class="pre-next next"><img src="./img/right-arrow.png"/></button>'
});

//Header Scroll for desktop
$(window).scroll(function(){
  if ($(this).scrollTop() > 800) {
      $('nav').addClass('fixed');
  } else {
      $('nav').removeClass('fixed');
  }
});

//Header Scroll for mobile
$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
      $('header').addClass('header-backcolor');
  } else {
      $('header').removeClass('header-backcolor');
  }
});

//Popup
$('.show_popup').click(function() {
  var popup_id = $('#' + $(this).attr("rel"));
  $(popup_id).show();
  $('.overlay_popup').show();
})
$('.overlay_popup').click(function() {
  $('.overlay_popup, .popup__form').hide();
})