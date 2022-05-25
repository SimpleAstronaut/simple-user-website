function login() {
    const username = document.getElementById("username").value;
    $.get("http://127.0.0.1:8082/getid", { username: username }, function (data, status) {
        data = JSON.parse(data);
        const sta = data.status;
        if (sta == 200) {
            const user_id = data.USER_ID;
            const password = document.getElementById("password").value;
            $.get("http://127.0.0.1:8081/token/get", { id: user_id, password: password }, function (data, status) {
                var tokensta = data.status;
                if (tokensta == 200) {
                    const token = data.token;
                    if (getQueryString("target") == null) {
                        const target = "http://127.0.0.1:5500/admin.html?user_id=" + user_id + "&token=" + token;
                        window.location.href = target;
                    } else {
                        const target = getQueryString("target") + "?user_id=" + user_id + "&token=" + token;
                        window.location.href = target;
                    }
                    //alert(token);
                } else {
                    alert("密码错误!");
                }
            })
        } else {
            const errmsg = data.errmsg;
            alert("用户名错误!");
        }
    })
}

function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
}