$(function() {
    //获取选择器
    var index = window.location.href.split('/').length - 1; //获取索引值
    console.log(index)
        //获取地址栏地址  file://E:/project/导航条/当前页面高亮显示的通栏导航条/index.html
    var href = window.location.href.split('/')[index];
    console.log(href)

    $("#label-wrap .link-wrap a[href^='" + href + "']").addClass("active");
});
