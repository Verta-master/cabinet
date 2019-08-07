var breakpoint = window.matchMedia( '(min-width:481px)' );
var mySwiper;
var breakpointChecker = function() {
  if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;
  } else if ( breakpoint.matches === false ) {
      return enableSwiper();
  }
};

var enableSwiper = function() {
  mySwiper = new Swiper ('.portfolio__list', {
    slidesPerView: 1,
    pagination: {
        el: '.portfolio__pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.portfolio__next',
      prevEl: '.portfolio__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
  });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

var mySwiper2;
var breakpointChecker2 = function() {
  if ( breakpoint.matches === true ) {
      if ( mySwiper2 !== undefined ) mySwiper2.destroy( true, true );
      return;
  } else if ( breakpoint.matches === false ) {
      return enableSwiper2();
  }
};

var enableSwiper2 = function() {
  mySwiper2 = new Swiper ('.portfolio__list2', {
    slidesPerView: 1,
    pagination: {
        el: '.portfolio__pagination2',
        clickable: true,
    },
    navigation: {
      nextEl: '.portfolio__next2',
      prevEl: '.portfolio__prev2',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
  });
};

breakpoint.addListener(breakpointChecker2);
breakpointChecker2();
