$(function() {
    // 面包屑导航
    $(".event-menu-toogle").on("click", function() {
        $(".sidebar-menu,.mask").toggleClass("menu-open");
        // document.addEventListener('touchmove',touch, false);
        $("body").css("overflow", "hidden");
        $('body').bind("touchmove", function(e) {
            e.preventDefault();
        });
        toggleNav();
    });
    // close
    $(".event-close-menu,.mask").on("click", function() {
        $("body").css("overflow", "auto");
        $("body").unbind("touchmove");
        // document.removeEventListener('touchmove',touch,false);
        $(".sidebar-menu,.mask").removeClass("menu-open");
        toggleNav();
        $("html,body").removeClass("overflow-hidden");
    });

    function toggleNav() {
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

    // 首页轮播
    ! function() {
        if ($("body").hasClass("index")) {
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
            $(".panel .panel-head").on("click", function() {
                // 判断对象是隐藏还是显示
                if ($(this).next(".panel-collapse").is(":hidden")) {
                    // 如果是隐藏
                    if (!$(this).next(".panel-collapse").is(":animated")) {
                        $(this).children(".panel-icon").addClass("collapse-toggle");
                        //.parents(".panel").siblings().find('.panel-icon').removeClass('collapse-toggle');
                        $(this).next('.panel-collapse').stop().slideDown();
                        // .parents(".panel").siblings().find('.panel-collapse').stop().slideUp();
                    }
                } else {
                    //  显示
                    if (!$(this).next('.panel-collapse').is(":animated")) {
                        $(this).children(".panel-icon").removeClass("collapse-toggle");
                        $(this).next(".panel-collapse").stop().slideUp();
                    }
                }
            });
        } else {
            return false;
        }
    }();

    // 关于我们tab切换
    ! function() {
        if ($("body").hasClass("about_us")) {
            $(".nav-tabs li").on("touchend", function() {
                var $index = $(this).index();
                $(this).addClass("is-active").siblings().removeClass("is-active");
                $(".tab-container .tab-pane").eq($index).show().siblings().hide();
            });
        } else {
            return false;
        }
    }();

    // download
    ! function() {
        if ($("body").hasClass("download")) {
            var checkInputs = $(".check-inputs")
                //遍历所有的选择框
            for (var i = 0; i < checkInputs.length; i++) {
                checkInputs[i].onclick = function() {
                    if (this.checked == true) {
                        $(this).siblings(".select-text").html("已选");
                    }else {
                        $(this).siblings(".select-text").html("选择");
                    }
                }
            }
        }
    }();

    // success-case
    !function () {
        if ($("body").hasClass("success-case")) {
            $(".event-sectors").click(function () {
                $(this).children(".panel-icon").toggleClass("is-active");
                $(this).siblings(".panel-collapse").slideToggle();
            });
        }
    }();
});
