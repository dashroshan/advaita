// Events Start
var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        945: { slidesPerView: 3 },
        630: { slidesPerView: 2, spaceBetween: 25 },
    },
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});
// Events end