// JavaScript Document
/*****************数据改变  ul 不变*************/
//根据数据写入 li
clipInit = function() {
    pageCon = 10; //可更改
    liTab = 5; //可更改
    medCur = Math.ceil(liTab / 2);
    var str = "";
    str += "<ul>";
    str += "<li class='disbled' id='prevPage' onclick='LastPage()'>上一页</li>";
    str += "<div id='pageU' class='fl'>";
    if (liTab <= pageCon) {
      for (var i = 1; i <= liTab; i++) {
        str += "<li id='clip" + i + "' onclick='pageInt(&#039;clip" + i + "&#039;,&#039;" + liTab + "&#039;,&#039;" + medCur + "&#039;)'>" + i + "</li>";
      }
    } else {
      for (var i = 1; i <= pageCon; i++) {
        str += "<li id='clip" + i + "' onclick='pageInt(&#039;clip" + i + "&#039;,&#039;" + pageCon + "&#039;,&#039;" + medCur + "&#039;)'>" + i + "</li>";
      }
    }
    str += "</div>";
    str += "<li class='page-item' id='nextPage' onclick='NextPage()'>下一页</li>";
    str += "</ul>";
    $("#page").html(str);
    pageInt('clip1', pageCon, medCur);
  }
  //设置当点击的值小于预设固定值
  //单击事件  选择页数
clipPage = function(cur, page) {
    var str = "";
    for (var i = 1; i <= page; i++) {
      var liId = "clip" + i;
      if (cur == i) {
        $("#" + liId).attr("class", "page-item curPage");
      } else {
        $("#" + liId).attr("class", "page-item");
      }
      $("#" + liId).text(i);
    }
    pageControl(cur);
  }
  //设置的中转站，根据获取的值更改操作
pageInt = function(obj, page, medCur) {
    var value = parseInt($("#" + obj).text());
    if (value < medCur) {
      clipPage(value, page);
    } else if (value >= medCur) {
      clipPageMax(value, page, medCur);
    }
  }
  //设置当获取的值大于预设固定值
clipPageMax = function(cur, page, medCur) {
    var str = "";
    var startNum = cur - medCur + 1;
    var maxPage = startNum + parseInt(page) - 1;
    if (maxPage < pageCon) {
      for (var i = 1; i <= page; i++) {
        var liId = "clip" + i;
        if (medCur == i) {
          $("#" + liId).attr("class", "page-item curPage");
        } else {
          $("#" + liId).attr("class", "page-item");
        }
        $("#clip" + i).text(startNum);
        startNum++;
      }
    } else {
      var end = new RegExp(/\d+$/);
      var page = parseInt(end.exec(page));
      var curT = cur - pageCon + page;
      var maxP = pageCon;
      for (var i = page; i >= 1; i--) {
        var liId = "clip" + i;
        if (curT == i) {
          $("#" + liId).attr("class", "page-item curPage");
        } else {
          $("#" + liId).attr("class", "page-item");
        }
        $("#" + liId).text(maxP);
        maxP--;
      }

    }
    pageControl(cur);
  }
  //首页，尾页，上一页，下一页 的样式
pageControl = function(cur) {
    if (cur == 1) {
      $("#prevPage").attr("class", "prevPage disbled");
      $("#nextPage").attr("class", "page-item nextPage");
    } else if (cur == pageCon) {
     $("#prevPage").attr("class", "page-item prevPage");
      $("#nextPage").attr("class", "disbled nextPage");
    } else {
      $("#prevPage").attr("class", "page-item prevPage");
      $("#nextPage").attr("class", " page-item nextPage");
    }
  }
  //上一页 显示
LastPage = function() {
    var choice = $(".curPage").attr('id');
    var obj = $("#" + choice).prev().attr('id');
    pageInt(obj, liTab, medCur);
  }
  //下一页 显示
NextPage = function() {
  var choice = $(".curPage").attr('id');
  var obj = $("#" + choice).next().attr('id');
  pageInt(obj, liTab, medCur);
}
