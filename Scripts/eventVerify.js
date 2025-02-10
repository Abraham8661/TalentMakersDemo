let SECONDS = 59;
let MINUTE = 4;

function timer(){
    const countDown = window.setInterval(()=>{
        const timeText = document.getElementById('timeDisplay');
        const timeSection = document.getElementById('timeSection');
        const resendBtn = document.getElementById('resendButton');
        timeText.textContent = `${MINUTE}:${SECONDS}`;
        SECONDS--;

        if(SECONDS < 0){
            MINUTE--;
            SECONDS = 59;
        }

        if(MINUTE < 0){
            resendBtn.classList.remove('hidden');
            resendBtn.classList.add('flex');
            timeSection.classList.remove('flex');
            timeSection.classList.add('hidden');
            window.clearInterval(countDown)
        }
    }, 1000);
}
timer()