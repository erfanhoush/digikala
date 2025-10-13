const swiper = new Swiper(".story", {
  slidesPerView: 10,
  spaceBetween: 39,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
});

const homeBtn = document.querySelector("#back-home");

homeBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});