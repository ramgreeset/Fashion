var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});