//Program Registration form popup

const programSection = document.getElementById("progam-form-popup-section");
const openProgramFormBtn = document.getElementById("open-program-form-btn");
const closeProgramFormBtn = document.getElementById("close-program-form-popup");
function showProgramForm() {
  programSection.classList.toggle("hidden");
  programSection.classList.toggle("flex");
}
openProgramFormBtn.addEventListener("click", () => {
  showProgramForm();
});
closeProgramFormBtn.addEventListener("click", () => {
  showProgramForm();
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

//Share article popup
function shareArticleShow() {
  const shareArticleSec = document.getElementById('share-article-section');
  shareArticleSec.classList.toggle("hidden");
  shareArticleSec.classList.toggle("flex");
}
const openShareArticleBtn = document.getElementById('open-Share-article-popup');
const closeShareArticleBtn = document.getElementById('close-Share-article-popup');
openShareArticleBtn.addEventListener('click', ()=>{
  shareArticleShow()
})
closeShareArticleBtn.addEventListener('click', ()=>{
  shareArticleShow()
})

document.addEventListener("DOMContentLoaded", function () {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);
  //const source = encodeURIComponent("TalentMakers Foundation");

  // Twitter Share Link
  document.getElementById("shareTwitter").href = `https://x.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;

  // Facebook Share Link
  document.getElementById("shareFacebook").href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;

  // LinkedIn Share Link
  document.getElementById("shareLinkedIn").href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

  //Link section 
  document.getElementById("articleLink").textContent = pageUrl;
});


function copyText(textToCopy, copyBtn){
  navigator.clipboard.writeText(textToCopy)
  .then(()=>{
      copyBtn.textContent = "Copied";
  })
  .catch(()=>{
      const newError = new Error('Failed to copy text');
      alert(newError) 
  })
}

const copyBtn = document.getElementById("copyLink");
copyBtn.addEventListener('click', ()=>{
  const articleLink = document.getElementById("articleLink");
  copyText(articleLink.textContent, copyBtn);
})