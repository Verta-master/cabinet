//Modal window list drop buttons
$('.modal-table__line').click(function() {
  $(this).next().next().slideToggle();
  $(this).next().toggleClass('modal-table__btn--open');
  $(this).next().next().toggleClass('modal-table__list--open');
});
