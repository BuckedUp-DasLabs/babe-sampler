const customHeader = (scrollPoint) =>{
  const header = document.querySelector(".header");
  const scrollElement = document.getElementById(scrollPoint)
  window.addEventListener("scroll", () => {
    if (!isInViewport(scrollElement)) {
      header.classList.add("active");
    } else header.classList.remove("active");
  });
}

const productsSwiper = new Swiper('.products-swiper', {
  autoHeight: true,
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