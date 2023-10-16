const productsSwiper = new Swiper('.products-swiper', {
  slidesPerView: 1,
  rewind: true,
  spaceBetween: 144,
  autoplay: {
    delay: 3000,
  },
  speed: 400,
  pagination: {
    el: '.products-swiper-pagination',
  },
  navigation: {
    nextEl: '.products-swiper-next',
    prevEl: '.products-swiper-prev',
  },

});