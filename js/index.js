console.log('script loaded');

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    spaceBetween: 30,
    mousewheel: true,
    mousewheelControl: true, 
    parallax: true,
    speed: 600,
    lazy: true,
    mousewheelOptions: {
        sensibility: 0.5,
        thresholdTime: 1000,
        thresholdDelta: 1000,
    },
    loop: true,
  });