$('.menu__btn').on('click', function () {
   $('.menu__list').slideToggle();
   $('.menu__btn').toggleClass('active');

});

$('.slider').slick({
   arrows: false,
   asNavFor: '.thumbs',
   arrows: false,
   slidesToShow: 1,
   responsive: [
      {
        breakpoint: 520,
        settings: {
          dots: true,
        }
      }
   ]
});
$('.thumbs').slick({
   slidesToShow: 3,
   arrows: false,
   focusOnSelect: true,
   asNavFor: '.slider',
   vertical: true,
});
