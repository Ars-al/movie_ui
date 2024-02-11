$('.slider-single').slick({
  slidesToShow: 5,
  // slidesToScroll: 4,
  arrows: false,
  dots: false,
  fade: false,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 5,
      // slidesToScroll: 5,
      autoplay: true,
    }
  },
  {
    breakpoint: 991,
    settings: {
      arrows: false,
      slidesToShow: 3,
      // slidesToScroll: 5,
      autoplay: true,
    }
  }, {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 3,
      // slidesToScroll: 5,
      autoplay: true,
    }
  },
  {
    breakpoint: 425,
    settings: {
      arrows: false,
      slidesToShow: 2,
      
      autoplay: true,
    }
  },
  ]
});

$('.slider-banner').slick({
  slidesToShow: 1,
  // slidesToScroll: 4,
  arrows: false,
  dots: false,
  fade: false,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 1,
      
      autoplay: true,
    },
  }]
});

$('.slider-small').slick({
  slidesToShow: 2,
  // slidesToScroll: 4,
  arrows: false,
  dots: false,
  fade: false,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 2,
      
      autoplay: true,
    },

    breakpoint: 991,
    settings: {
      arrows: false,
      slidesToShow: 1,
      
      autoplay: true,
    },
  }]
});
$('.slider-single-filter').slick({
  slidesToShow: 4,
  // slidesToScroll: 4,
  arrows: false,
  dots: false,
  fade: false,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  responsive: [{
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 3,
      autoplay: true,
    },
    breakpoint: 991,
    settings: {
      arrows: false,
      slidesToShow: 2,
      autoplay: true,
    },
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 2,
      autoplay: true,
    },
  }]
});
