// Slider For Service cards
const swiper = new Swiper('.service__slider', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1.4,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    580: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 3.6,
    },
    1600: {
      slidesPerView: 4,
    },
  },
})
