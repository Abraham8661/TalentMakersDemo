function showTime(){
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', hour12: false });
    const hour = formatter.format(date)
    //console.log(hour);
    
    const greetingText = document.getElementById('greeting');
    if(hour <= 11){
        greetingText.textContent = "Good Morning,"
    };
    if(hour >= 12 && hour <= 15){
        greetingText.textContent = "Good Afternoon,"
    };
    if(hour >= 16 && hour <= 23){
        greetingText.textContent = "Good Evening,"
    };
}

showTime()


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

//Logout popup                                                                                                                                                                                                                                                                                              form popup
const logoutSection = document.getElementById("logout-popup-section");
const openLogoutBtn = document.getElementById("open-logout-popup");
const openLogoutBtn2 = document.getElementById("open-logout-popup2");
const closeLogoutBtn = document.getElementById("close-logout-popup");
const closeLogoutBtn2 = document.getElementById("cancel-logout-popup");

function logout() {
  logoutSection.classList.toggle("hidden");
  logoutSection.classList.toggle("flex");
}
openLogoutBtn.addEventListener("click", () => {
  logout();
});
openLogoutBtn2.addEventListener("click", () => {
  logout();
});
closeLogoutBtn.addEventListener("click", () => {
  logout();
});
closeLogoutBtn2.addEventListener("click", () => {
  logout();
});

//Edit profile form popup                                                                                                                                                                                                                                                                                              form popup
const editProfileSection = document.getElementById("edit-profile-popup-section");
const openEditProfileFormBtn = document.getElementById("open-edit-profle-form-popup");
const closeEditProfileFormBtn = document.getElementById("close-edit-profle-form-popup");
function showEditProfileForm() {
    editProfileSection.classList.toggle("hidden");
    editProfileSection.classList.toggle("flex");
}
openEditProfileFormBtn.addEventListener("click", () => {
    showEditProfileForm();
});
closeEditProfileFormBtn.addEventListener("click", () => {
    showEditProfileForm();
});

//Profile image change
let input = document.getElementById('new-photo');
function previewImage() {
    let preview = document.getElementById('imagePreview');

    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }

    var file = input.files[0];

    if (file) {
      let reader = new FileReader();

      reader.onload = function (e) {
        let img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '96px';
        img.style.height = '96px';
        img.style.borderRadius = '9999px';
        img.style.objectFit = 'cover';
        preview.appendChild(img);
      };

      reader.readAsDataURL(file);
    }
}
input.addEventListener('change', ()=>{
    previewImage()
})


//Tabs switch

function showEvents() {
  const eventsSection = document.getElementById("eventDashboard");
  const upcomingTab = eventsSection.querySelectorAll('.upcoming');
  const pastTab = eventsSection.querySelectorAll('.past');
  const upcomingEvents = document.getElementById("upcomingSection");
  const pastEvents = document.getElementById("pastSection");
  upcomingTab.forEach((tab)=>{
    tab.addEventListener("click", ()=>{
      upcomingEvents.classList.remove("hidden");
      upcomingEvents.classList.add("flex");
      pastEvents.classList.remove("flex");
      pastEvents.classList.add("hidden");
    })
  })
  pastTab.forEach((tab)=>{
    tab.addEventListener("click", ()=>{
      pastEvents.classList.remove("hidden");
      pastEvents.classList.add("flex");
      upcomingEvents.classList.remove("flex");
      upcomingEvents.classList.add("hidden");
    })
  })
}
showEvents()
