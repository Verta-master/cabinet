$('.nav__btn').click(function() {
  $('.nav__item:nth-child(n + 2)').slideToggle();
  $(this).toggleClass('nav__btn--open');
});
