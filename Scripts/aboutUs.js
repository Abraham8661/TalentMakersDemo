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

//Show more story
const moreInfoSec = document.getElementById("more-about-us-info");
const moreBtn = document.getElementById("our-story-more-btn");
function showText() {
  moreInfoSec.classList.toggle("hidden");
  moreInfoSec.classList.toggle("flex");

  if (moreBtn.textContent == "Show more") {
    // Fixed syntax: Added parentheses and correct comparison
    moreBtn.textContent = "Show less";
  } else {
    moreBtn.textContent = "Show more";
  }
}
moreBtn.addEventListener("click", () => {
  showText();
});
