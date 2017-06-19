$(function () {
    // tab切换
    $(".nav-tabs li").on("touchend", function () {
        var $index = $(this).index();
        $(this).addClass("is-active").siblings().removeClass("is-active");
        $(".tab-container .tab-pane").eq($index).show().siblings().hide();
    });
});