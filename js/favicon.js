//Dynamic favicon
var isFirefox = typeof InstallTrigger !== 'undefined';

if (isFirefox) {
  $("link[rel='icon']").remove();
  $("link[rel='shortcut icon']").remove();
  $("head").append('<link rel="icon" href="img/icons/favicon.gif" type="image/gif">');
}
else {
  var favicon_images = [
    'img/favicons/1.png',
    'img/favicons/1_2.png',
    'img/favicons/2.png',
    'img/favicons/2_3.png',
    'img/favicons/3.png',
    'img/favicons/3_4.png',
    'img/favicons/4.png',
    'img/favicons/4_5.png',
    'img/favicons/5.png',
    'img/favicons/5_6.png',
    'img/favicons/6.png',
    'img/favicons/6_7.png',
    'img/favicons/7.png',
    'img/favicons/7_8.png',
    'img/favicons/8.png',
    'img/favicons/8_1.png'
  ],
  image_counter = 0;

  setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

    if(image_counter == favicon_images.length -1)
      image_counter = 0;
    else
      image_counter++;
  }, 250);
};