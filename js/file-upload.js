$('#file').change(function() {
  var i = $(this).prev('span').clone();
  var file = $('#file')[0].files[0].name;
  $(this).prev('span').text(file);
  $(this).prev('span').css('color', '#000');
});
