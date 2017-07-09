$(function () {
    // 面包屑导航
    $(".event-menu-toogle").on("click", function(){
        $(".sidebar-menu,.mask").toggleClass("menu-open");
        // document.addEventListener('touchmove',touch, false);
        $("body").css("overflow","hidden");
        $('body').bind("touchmove",function(e){
            e.preventDefault();
        });
        toggleNav();
    });
    // close
    $(".event-close-menu,.mask").on("click", function () {
        $("body").css("overflow","auto");
        $("body").unbind("touchmove");
        // document.removeEventListener('touchmove',touch,false);
        $(".sidebar-menu,.mask").removeClass("menu-open");
        toggleNav();
        $("html,body").removeClass("overflow-hidden");
    });
    function toggleNav(){
        var navIsVisible = ($('.sidebar-menu').hasClass('menu-open')) ? true : false;
        $('.sidebar-menu').toggleClass('menu-open', navIsVisible);
        $('.event-menu-toogle').toggleClass('menu-open', navIsVisible);
    }
    // 绑定元素点击事件
    $(".has-children .menu-label").click(function(event) {
        event.preventDefault();
        // 判断对象是隐藏还是显示
        if ($(this).next(".dropdown").is(":hidden")) {
            // 如果是隐藏
            if (!$(this).next(".dropdown").is(":animated")) {
                $(this).addClass("is-active").parent().siblings(".menu-items").find('.menu-label').removeClass('is-active');
                $(this).next('.dropdown').stop().slideDown().parent().siblings(".menu-items").find('.dropdown').stop().slideUp();
            }
        } else {
            //  显示
            if (!$(this).next('.dropdown').is(":animated")) {
                $(this).removeClass("is-active");
                $(this).next(".dropdown").stop().slideUp();
            }
        }
    });
});