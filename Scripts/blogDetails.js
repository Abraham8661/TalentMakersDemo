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


//Like article
const LikeArticleForm = document.getElementById('likeArticleForm');
const likeBtn = document.getElementById('like-btn');

function likeArticle(){
  const articleLikes = document.getElementById('aricleLikes');
  if(likeBtn.classList.contains('yesLike')){
    likeBtn.innerHTML = '<i class="fa-solid fa-thumbs-up" style="color: #6a0dad;"></i>';
    likeBtn.classList.remove('yesLike')
    likeBtn.classList.add('noLike')
    LikeArticleForm.submit()
  }else if(likeBtn.classList.contains('noLike')){
    likeBtn.innerHTML = '<i class="fa-regular fa-thumbs-up" style="color: #000000;"></i>';
    likeBtn.classList.remove('noLike')
    likeBtn.classList.add('yesLike')
    LikeArticleForm.submit()
  }
  articleLikes.classList.toggle('text-gray-900')
  articleLikes.classList.toggle('text-priColor')
}

likeBtn.addEventListener('click', ()=>{
  likeArticle()
})