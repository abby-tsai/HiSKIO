/* pre-3 Swiper */
var swiper = new Swiper(".pre-3-slider", {
   slidesPerView: 3,
   spaceBetween: 0,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: "auto",
         spaceBetween: 30,
         centeredSlides: true,
         loop: true
      },
      // when window width is >= 575px
      575: {
         slidesPerView: "auto",
         spaceBetween: 67,
         centeredSlides: true,
         loop: true
      },
      // when window width is >= 1024px
      1024: {
         spaceBetween: 0
      }
   }
});

/* tab Swiper */
var swiper = new Swiper(".tab-thumbs", {
   spaceBetween: 0,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
});
var swiper2 = new Swiper(".tab-slider", {
   spaceBetween: 10,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: swiper,
   },
});

/* back to top */
$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('#scroll').fadeIn();
      } else {
         $('#scroll').fadeOut();
      }
   });
   $('#scroll').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
   });
});
