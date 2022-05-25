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

window.onload = function(){
    const user_id = getQueryString("user_id");
    const token = getQueryString("token");
    $.get("http://127.0.0.1:8082/getinfo", { user_id : user_id, token : token }, function(data, status){
        var username = JSON.stringify(data.data.USERNAME);
        var mail = JSON.stringify(data.data.MAIL);
        var 
    })
}

