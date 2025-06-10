const scholarSection = document.getElementById("scholar-popup-section");
const openScholarBtns = document.querySelectorAll('.view-moreBtn');
const closeScholarBtn = document.querySelectorAll(".close-scholar-popup");

function showScholar() {
  scholarSection.classList.toggle("hidden");
  scholarSection.classList.toggle("flex");
}

openScholarBtns.forEach((button) => {
  button.addEventListener('click', () => {
    showScholar()
  });
});

closeScholarBtn.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    showScholar()
  });
});


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
