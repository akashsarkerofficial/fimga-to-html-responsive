$('#banner_slider').slick({
    arrows:false,
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    speed: 300,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.count').counterUp({
    delay: 10,
    time: 1000
});
  
  $('.client_slider').slick({
    arrows:true,
    dots: false,
    infinite: true,
    autoplay:false,
    centerMode: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<i class="prev fa-solid fa-angles-left"></i>',
    nextArrow:'<i class="next fa-solid fa-angles-right"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerMode: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true
        }
      },
    ]
  });
      