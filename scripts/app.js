const swiper = new Swiper(".story", {
  slidesPerView: 11.5,
  spaceBetween: 39,
  centeredSlide: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
});
let swiper_ad = new Swiper(".mySwiper_ad", {
  pagination: {
    el: ".custom-pagination-ad",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-pagination-ad-bullet"></span>';
    }
  },
});