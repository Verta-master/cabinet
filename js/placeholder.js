$('.form__input').on('change', function() {
  if ($(this).val() == '') {
    $(this).next().removeClass("placeholder-active");
  } else {
    $(this).next().addClass("placeholder-active");
  }
});

$('.form__message').on('change', function() {
  if ($(this).val() == '') {
    $(this).next().removeClass("placeholder-active");
  } else {
    $(this).next().addClass("placeholder-active");
  }
});

$('.login__input').on('change', function() {
  if ($(this).val() == '') {
    $(this).next().removeClass("placeholder-active");
  } else {
    $(this).next().addClass("placeholder-active");
  }
});

$('.modal__input').on('change', function() {
  if ($(this).val() == '') {
    $(this).next().removeClass("placeholder-active");
  } else {
    $(this).next().addClass("placeholder-active");
  }
});
