const customHeader = (scrollPoint) =>{
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

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