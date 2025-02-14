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