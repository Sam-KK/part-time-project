$(function () {
    // 轮播
    var slider = new Swiper('#slider', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        autoplay: 3000,
        loop: true
    });

    // 成功案例轮播
    var caseSwiper = new Swiper('#case-slider', {
        pagination: '.swiper-pagination',
        slidesPerView: 1.5,
        spaceBetween: 30
    });
});