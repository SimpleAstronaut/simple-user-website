/*
 * 获取url中的请求参数函数
 * 来源:https://www.jianshu.com/p/708c915fb905
 * 大小伍 2017.11.30
 */
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
}

window.onload = function () {
    const user_id = getQueryString("user_id");
    const token = getQueryString("token");
    $.get("https://service-jzdhwuy1-1304083067.bj.apigw.tencentcs.com/release/getinfo", { user_id: user_id, token: token }, function (data, status) {
        if (data.status == 200) {
            var username = JSON.stringify(data.data.username);
            var mail = JSON.stringify(data.data.mail);
            var avatar = JSON.stringify(data.data.avatar);
            var groups = JSON.stringify(data.data.groups);
            var txlevel = JSON.stringify(data.data.txlevel);
            var gameacc = JSON.stringify(data.data.gameacc);
            var retime = JSON.stringify(data.data.retime);
            console.log("succ!");
        } else{
            alert("登录错误!");
            window.location.href="http://login.jdsj.site";
        }
    })
}

