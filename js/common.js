$(function(){
    $("#number").mask("+7 (999) 999-99-99", {placeholder: " "});
  });

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