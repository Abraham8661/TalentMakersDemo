//Volunteer Registration form popup
const volunteerSection = document.getElementById(
  "volunteer-form-popup-section"
);
const openVolunteerFormBtn = document.getElementById(
  "open-volunteer-form-popup"
);
const closeVolunteerFormBtn = document.getElementById(
  "close-volunteer-form-popup"
);
function showVolunteerForm() {
  volunteerSection.classList.toggle("hidden");
  volunteerSection.classList.toggle("flex");
}
openVolunteerFormBtn.addEventListener("click", () => {
  showVolunteerForm();
});
closeVolunteerFormBtn.addEventListener("click", () => {
  showVolunteerForm();
});

//Partner Registration form popup
const partnerSection = document.getElementById("partner-form-popup-section");
const openPartnerFormBtn = document.getElementById("open-partner-form-popup");
const closePartnerFormBtn = document.getElementById("close-partner-form-popup");
function showPartnerForm() {
  partnerSection.classList.toggle("hidden");
  partnerSection.classList.toggle("flex");
}
openPartnerFormBtn.addEventListener("click", () => {
  showPartnerForm();
});
closePartnerFormBtn.addEventListener("click", () => {
  showPartnerForm();
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
