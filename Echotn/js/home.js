$(function () {
    // 侧边栏菜单
    // 绑定元素点击事件
    $(".has-children .menu-label").click(function(event) {
        event.preventDefault();
        // 判断对象是隐藏还是显示
        if ($(this).next(".dropdown").is(":hidden")) {
            // 如果是隐藏
            if (!$(this).next(".dropdown").is(":animated")) {
                $(this).addClass("is-active").parent().siblings().find('.menu-label').removeClass('isactive');
                $(this).next('.dropdown').stop().slideDown().parent().siblings().find('.dropdown').stop().slideUp();
            }
        } else {
            //  显示
            if (!$(this).next('.dropdown').is(":animated")) {
                $(this).removeClass("is-active");
                $(this).next(".dropdown").stop().slideUp();
            }
        }
    });
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