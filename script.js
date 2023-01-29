var reviewsSwiper = new Swiper(".reviewsSwiper", {
    navigation: {
      nextEl: ".reviews .swiper-button-next",
      prevEl: ".reviews .swiper-button-prev",
      
    },
    
    loop: true,
  });

  var gallerySwiper = new Swiper(".gallerySwiper", {
    navigation: {
      nextEl: ".gallery .swiper-button-next",
      prevEl: ".gallery .swiper-button-prev",
      
    },
    
    slidesPerView:2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true
  });