const buyswiper = new Swiper(".buy_by_sorting_swiper", {
      slidesPerView: 6.5,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      navigation: {
        nextEl :".next-btn",
        prevEl :".prev-btn",
      },
    });