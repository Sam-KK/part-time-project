$(function () {
    // 面包屑导航
    if ('ontouchstart' in window) {
        var click = 'touchstart';
    } else {
        var click = 'click';
    }
    $(".event-menu-toogle").on("click", function(){
        $("body").addClass("overflow-hidden");
        $(".sidebar-menu,.mask").toggleClass("menu-open");
        toggleNav();
    });
    // close
    $(".event-close-menu,.mask").on("click", function () {
        $("body,.sidebar-menu,.mask").removeClass("menu-open");
        toggleNav();
        $("body").removeClass("overflow-hidden");
    });
    function toggleNav(){
        var navIsVisible = ($('.sidebar-menu').hasClass('menu-open')) ? true : false;
        $('.sidebar-menu').toggleClass('menu-open', navIsVisible);
        $('.event-menu-toogle').toggleClass('menu-open', navIsVisible);
    }

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