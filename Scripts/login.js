//Volunteer Registration form popup
const volunteerSection = document.getElementById(
    "forgotpassword-form-popup-section"
  );
  const openVolunteerFormBtn = document.getElementById(
    "open-forgotpassword-form-popup"
  );
  const closeVolunteerFormBtn = document.getElementById(
    "close-forgotpassword-form-popup"
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