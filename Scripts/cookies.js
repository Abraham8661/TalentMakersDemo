const acceptCookieBtn = document.getElementById('acceptCookies')
const declineCookieBtn = document.getElementById('declineCookies')

function showCookiePopup(){
    const cookiesSection = document.getElementById("cookies-section");
    cookiesSection.classList.toggle('hidden')
    cookiesSection.classList.toggle('flex')
}

document.addEventListener("DOMContentLoaded", function () {
    showCookiePopup();
});

acceptCookieBtn.addEventListener('click', ()=>{
    showCookiePopup()
})

declineCookieBtn.addEventListener('click', ()=>{
    showCookiePopup()
})
