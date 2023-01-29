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
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
});


$(document).jQuery(function () {
  $("form").on(function () {
      // Получение ID формы
      var formID = $(this).attr('id');
      // Добавление решётки к имени ID
      var formNm = $('#' + formID);
      $.ajax({
          type: "POST",
          url: 'mail.php',
          data: formNm.serialize(),
          success: function (data) {
              // Вывод текста результата отправки
              $(formNm).html(data); 
          },
          error: function (jqXHR, text, error) {
              // Вывод текста ошибки отправки
              $(formNm).html(error);         
          }
      });
      return false;
  });
});