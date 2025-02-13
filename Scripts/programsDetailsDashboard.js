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
