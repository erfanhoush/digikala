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


const emailInput = document.querySelector(".email-box");
const emailInputInvalidText = document.querySelector(".invalid-email__box");
const emailInputEmpty = document.querySelector(".empty-email__box");
const submitBtn = document.querySelector(".submit");


const gmailRegex = /^(?!.*\.\.)[a-zA-Z0-9](?:[a-zA-Z0-9._+%-]{0,62}[a-zA-Z0-9+%-])?@gmail\.com$/i;

let emailInputValue = "";

const isValidGmail = (email) => {
  return gmailRegex.test(email);
}


emailInput.addEventListener("blur", () => {
  if (emailInput.length === 0) {
    console.log(emailInput.length);
    
    emailInputEmpty.classList.add("empty-alert");
  }
  emailInputEmpty.classList.add("empty-alert");
  emailInputEmpty.style.display = "block"
});

submitBtn.addEventListener("click", () => {
  if (!isValidGmail(emailInput.value) && emailInput.length > 0) {
    emailInputInvalidText.classList.add("invalid-alert");
    emailInputInvalidText.style.display = "block"
  }
});

emailInput.addEventListener("keyup", () => {
  emailInputEmpty.style.display = "block"
})