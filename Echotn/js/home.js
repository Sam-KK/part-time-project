// function touch (event){
//     event.preventDefault();
// }
$(function () {
    // 轮播
    var slider = new Swiper('#slider', {
        pagination: '#slider .swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        autoplay: 3000,
        loop: false
    });

    // 成功案例轮播
    var caseSwiper = new Swiper('#case-slider', {
        slidesPerView: 1.5,
        spaceBetween: 20
    });

    // 下拉菜单
    $(".panel .panel-head").on("click", function () {
        // 判断对象是隐藏还是显示
        if ($(this).next(".panel-collapse").is(":hidden")) {
            // 如果是隐藏
            if (!$(this).next(".panel-collapse").is(":animated")) {
                $(this).children(".panel-icon").addClass("collapse-toggle").parents(".panel").siblings().find('.panel-icon').removeClass('collapse-toggle');
                $(this).next('.panel-collapse').stop().slideDown().parents(".panel").siblings().find('.panel-collapse').stop().slideUp();
            }
        } else {
            //  显示
            if (!$(this).next('.panel-collapse').is(":animated")) {
                $(this).children(".panel-icon").removeClass("collapse-toggle");
                $(this).next(".panel-collapse").stop().slideUp();
            }
        }
    });
});