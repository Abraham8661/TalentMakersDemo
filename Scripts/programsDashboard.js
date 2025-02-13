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