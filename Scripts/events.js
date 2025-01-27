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

//Special Needs box
const specialNeedSec = document.getElementById("specialNeeds");
const checkBox = document.getElementById("specialNeedsCheckBox");
function showTextArea() {
  specialNeedSec.classList.toggle("hidden");
  specialNeedSec.classList.toggle("flex");
}
checkBox.addEventListener("click", () => {
  showTextArea();
});
