const swiperTop = new Swiper('.top__swiper', {
 
  effect: 'fade',
  autoplay:{
    deplay: 3500,
    disableOnInteraction: false,
  },
  pagination:{
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () =>{
    item.parentNode.classList.toggle('accordeon__item--active')
  })
});