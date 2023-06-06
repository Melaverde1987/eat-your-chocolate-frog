// js SwiperOurProducts
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 18,

  breakpoints: {
    //  >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    //  >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 18,
    },

    //  >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /*
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  */
});

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

var reviewSwiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    //  >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    //  >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    //  >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
  pagination: {
    el: '.swiper-reviews-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
