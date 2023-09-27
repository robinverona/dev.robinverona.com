console.log('script loaded');

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    spaceBetween: 30,
    mousewheel: true,
    mousewheelControl: true, 
    parallax: true,
    speed: 800,
    mousewheelOptions: {
        sensibility: 0.2,
        thresholdTime: 1000,
        thresholdDelta: 1000,
    },
    loop: true,
  });