const sliderSwiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-pagination-bullet"></span>';
    }
  },
  navigation: {
    nextEl: ".next-nav",
    prevEl: ".prev-nav"
  },
});