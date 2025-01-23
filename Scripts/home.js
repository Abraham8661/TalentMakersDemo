//Gallery popup

const gallerySection = document.getElementById('gallery-popup-section');
const openGalleryBtn = document.getElementById('open-gallery-btn');
const closeGalleryBtn = document.getElementById('close-gallery');
function showGallery(){
    gallerySection.classList.toggle('hidden');
    gallerySection.classList.toggle('flex');
}
openGalleryBtn.addEventListener('click',()=>{
    showGallery()
})
closeGalleryBtn.addEventListener('click',()=>{
    showGallery()
})


var swiper = new Swiper(".default-carousel", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".default-carousel .swiper-button-next",
      prevEl: ".default-carousel .swiper-button-prev",
    },
    breakpoints: {
     1920: {
         slidesPerView: 4,
         spaceBetween: 30
     },
     1028: {
         slidesPerView: 4,
         spaceBetween: 30
     },
     990: {
         slidesPerView: 1,
         spaceBetween: 0
     },
     640: {
         slidesPerView: 1,
         spaceBetween: 0
     }
   }
  });
  


