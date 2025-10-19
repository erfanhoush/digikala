const swiper = new Swiper(".story", {
  slidesPerView: 10,
  spaceBetween: 39,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

const homeBtn = document.querySelector("#back-home");

homeBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const emailInput = document.querySelector(".email-box");
const errorMessage = document.querySelector(".error-message");
const submitBtn = document.querySelector(".submit");

const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9](?:[a-zA-Z0-9._+%-]{0,62}[a-zA-Z0-9+%-])?@gmail\.com$/i;

const isValidGmail = (email) => {
  return emailRegex.test(email);
};

emailInput.addEventListener("keyup", () => {
  if (isValidGmail(emailInput.value)) {
    submitBtn.disabled = false;
    submitBtn.classList.add("active");
    errorMessage.textContent = "";
  } else if (!emailInput.value) {
    errorMessage.textContent = "اینجا را خالی نگذارید";
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active");
    errorMessage.textContent = "پست الکترونیک وارد شده درست نیست";
  }
});

const infoBox = document.querySelector(".info-text");
const toggleBtn = document.querySelector(".toggle-btn");

let expanded = false;
const initialHeight = "95px";
const expandedHeight = "100%";

toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  if (expanded) {
    infoBox.style.height = expandedHeight;
    toggleBtn.innerHTML = 'بستن <img src="./svgs/peikan.svg" alt="peikan" />';
  } else {
    infoBox.style.height = initialHeight;
    toggleBtn.innerHTML = 'مشاهده بیشتر <img src="./svgs/peikan.svg" alt="peikan" />';
  }
});