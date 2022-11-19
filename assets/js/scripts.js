$(document).ready(function(){
   //mobile-menu
   $('.mobile-menu').click(function(){
    $('.menu-items').slideToggle();
   });


    $('.carousel').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTime:2000,
      items:5,
      responsive : {
        // breakpoint from 0 up
        0 : {
          items:1,
        },
        // breakpoint from 480 up
        480 : {
          items:2,
        },
        // breakpoint from 768 up
        768 : {
          items:3,
        },
         // breakpoint from 991 up
         991 : {
          items:4,
        },
         // breakpoint from 1150 up
         1150 : {
          items:5,
        },
    }
    });


});
  