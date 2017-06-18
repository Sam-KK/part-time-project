$(function() {
    //测试数据
    var data = [{
        name: "中国网络小说海外走红！",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }, {
        name: "养老金全国统筹“贫富不均” 中央调剂金或先行清障",
        time: "2016-2-5"
    }, {
        name: "云南设立监理中心 旅游购物30天内可无理由退款",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }, {
        name: "老夫妇报500元旅行团却花40万 被诓买海景房",
        time: "2016-2-5"
    }, {
        name: "林心如产后身材恢复如初 “瘦身菜单”曝光",
        time: "2016-2-5"
    }, {
        name: "云南设立监理中心 旅游购物30天内可无理由退款",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }, {
        name: "云南设立监理中心 旅游购物30天内可无理由退款",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }, {
        name: "中国网络小说海外走红！",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }, {
        name: "养老金全国统筹“贫富不均” 中央调剂金或先行清障",
        time: "2016-2-5"
    }, {
        name: "云南设立监理中心 旅游购物30天内可无理由退款",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }, {
        name: "老夫妇报500元旅行团却花40万 被诓买海景房",
        time: "2016-2-5"
    }, {
        name: "林心如产后身材恢复如初 “瘦身菜单”曝光",
        time: "2016-2-5"
    }, {
        name: "云南设立监理中心 旅游购物30天内可无理由退款",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }, {
        name: "云南设立监理中心 旅游购物30天内可无理由退款",
        time: "2016-2-5"
    }, {
        name: "中国楼市调控升级“首付贷”卷土重来",
        time: "2016-2-5"
    }];
    var nums = 8; //每页出现的数量
    var pages = Math.ceil(data.length / nums); //得到总页数
    var thisDate = function(curr) {
        //此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
        var str = '',
            last = curr * nums - 1;
        last = last >= data.length ? (data.length - 1) : last;
        for (var i = (curr * nums - nums); i <= last; i++) {
            str += '<li class="news-item"><a href="">' + data[i].name + '</a><span class="news-time">' + data[i].time + '</span></li>';
        }
        return str;
    };
    //调用分页
    laypage({
        cont: 'pagination',
        pages: pages,
        jump: function(obj) {
            document.getElementById('news-list').innerHTML = thisDate(obj.curr);
        }
    })
});