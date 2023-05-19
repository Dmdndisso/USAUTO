$(function(){
    $('.carousel__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 841,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 1,
            }
          },
          
        ]
      });

      wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

});

