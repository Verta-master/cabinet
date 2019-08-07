$('.link-down').click(function(evt) {
  evt.preventDefault();
  $(this).next().slideToggle();
});
