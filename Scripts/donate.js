//Menu popup
const menuSection = document.getElementById("mobileMenu");
const menuBtn = document.getElementById("menu-btn");
function showMenu() {
  menuSection.classList.toggle("hidden");
  menuSection.classList.toggle("flex");
}
menuBtn.addEventListener("click", () => {
  showMenu();
});

//Donate as anonymous box
const yourInfoSecSec = document.getElementById("yourInfoSec");
const checkBox = document.getElementById("anonymousCheckBox");
function hideInfoSec() {
  yourInfoSecSec.classList.toggle("hidden");
  yourInfoSecSec.classList.toggle("flex");
}
checkBox.addEventListener("click", () => {
  hideInfoSec();
});

//Donation form popup
const reviewSection = document.getElementById(
  "review-donation-form-popup-section"
);
const openReviewFormBtn = document.getElementById("open-review-sec-btn");
const closeReviewFormBtn = document.getElementById("close-review-form-popup");
const cancelReviewForm = document.getElementById("cancel-form-btn");
function showReviewSec() {
  reviewSection.classList.toggle("hidden");
  reviewSection.classList.toggle("flex");
}

closeReviewFormBtn.addEventListener("click", () => {
  showReviewSec();
});
cancelReviewForm.addEventListener("click", () => {
  showReviewSec();
});

const donationForm = document.getElementById("donation-form");
const submitFormBtn = document.getElementById("continue-form-btn");
submitFormBtn.addEventListener("click", () => {
  donationForm.submit();
});

function fillReviewPopup() {
  let amountInput = document.getElementById("paymentAmount");
  let paymentFrequency = document.getElementById("paymentTimes");
  let message = document.getElementById("donationMessage");
  let fullName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let countryField = document.getElementById("countryField");
  let currencySign = document.getElementById("currencySign");

  let amountReview = document.getElementById("amountReviewSec");
  let otherAmount = document.getElementById("otherAmount");
  let paymentFrequencyReview = document.getElementById(
    "paymentFrequencyReview"
  );
  let messageReview = document.getElementById("messageReview");
  let fullNameReview = document.getElementById("fullNameReview");
  let emailReview = document.getElementById("emailReview");
  let countryFieldReview = document.getElementById("countryFieldReview");

  amountReview.textContent = `${currencySign.textContent} ${amountInput.value}`;
  otherAmount.textContent = `${currencySign.textContent} ${amountInput.value}`;
  paymentFrequencyReview.textContent = paymentFrequency.value;
  messageReview.textContent = message.value;
  fullNameReview.textContent = fullName.value;
  emailReview.textContent = email.value;
  countryFieldReview.textContent = countryField.value;
}

openReviewFormBtn.addEventListener("click", () => {
  showReviewSec();
  fillReviewPopup();
});

fetch("https://api.ipregistry.co/?key=ira_scu2SBCve4QSGRQJC8B7988g8OSB022C2lYP")
  .then(function (response) {
    return response.json();
  })
  .then(function (payload) {
    const country = payload.location.country.name;
    const countryField = document.getElementById("countryField");
    const optionElement = countryField.options[0];
    optionElement.textContent = country;
    optionElement.value = country;
    let countrySign = document.getElementById("currencySign");
    if (country != "Nigeria") {
      countrySign.textContent = "$";
    }
  });
