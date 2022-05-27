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
            var username = data.data.username;
            var mail = data.data.mail;
            var avatar = data.data.avatar;
            var groups = data.data.groups;
            var txlevel = data.data.txlevel;
            var gameacc = data.data.gameacc;
            var retime = data.data.retime;
            
            /* 
             * 生成前端组件
             * basicInfo -> 基本信息,包含username user_id 和注册时间
             * otherInfo -> 其它信息,包含mail groups txlevel gameacc
             * groups和txlevel详见1.0版本api文档
             * SimpleAstronaut 2022-5-26
             */
            var basicInfo = document.createElement('DIV');//基本信息
            var otherInfo = document.createElement('DIV');//其他信息
            basicInfo.className = 'card';
            otherInfo.className = 'card';

            //生成用户名组件
            var username_basicinfo = document.createElement('DIV');
            username_basicinfo.className = 'list-group-item';
            username_basicinfo.textContent = '用户名:  '+username;

            //生成user_id组件
            var user_id_basicinfo = document.createElement('DIV');
            user_id_basicinfo.className = 'list-group-item';
            user_id_basicinfo.textContent = '用户id:  '+user_id;

            //生成注册时间组件
            var retime_basicinfo = document.createElement('DIV');
            retime_basicinfo.className = 'list-group-item';
            retime_basicinfo.textContent = '注册时间:  '+retime;

            //生成容器
            var basic_info_box = document.createElement('UL');
            basic_info_box.className = 'list-group list-group-flush';

            var basic_info_title = document.createElement('DIV');
            basic_info_title.className = 'card-header';
            basic_info_title.textContent = '基本信息';

            //基本信息组件注入
            basic_info_box.appendChild(username_basicinfo);
            basic_info_box.appendChild(user_id_basicinfo);
            basic_info_box.appendChild(retime_basicinfo);
            basicInfo.appendChild(basic_info_title);
            basicInfo.appendChild(basic_info_box);


            //生成电子邮件组件
            var mail_otherinfo = document.createElement('DIV');
            mail_otherinfo.className = 'list-group-item';
            mail_otherinfo.textContent = '电子邮箱地址:  '+mail;

            //生成用户组组件
            var groups_otherinfo = document.createElement('DIV');
            groups_otherinfo.className = 'list-group-item';
            groups_otherinfo.textContent = '用户组:  '+groups;

            //生成通行证等级组件
            var txlevel_otherinfo = document.createElement('DIV');
            txlevel_otherinfo.className = 'list-group-item';
            txlevel_otherinfo.textContent = '通行证等级:  '+txlevel;

            //生成绑定游戏账户组件
            var gameacc_otherinfo = document.createElement('DIV');
            gameacc_otherinfo.className = 'list-group-item';
            gameacc_otherinfo.textContent = '绑定游戏账户:  '+gameacc;

            //生成容器
            var otherinfo_box = document.createElement('UL');
            otherinfo_box.className = 'list-group list-group-flush';

            var otherinfo_title = document.createElement('DIV');
            otherinfo_title.className = 'card-header';
            otherinfo_title.textContent = '其他信息';

            //其他信息注入
            otherinfo_box.appendChild(mail_otherinfo);
            otherinfo_box.appendChild(groups_otherinfo);
            otherinfo_box.appendChild(txlevel_otherinfo);
            otherinfo_box.appendChild(gameacc_otherinfo);
            otherInfo.appendChild(otherinfo_title);
            otherInfo.appendChild(otherinfo_box);

            document.getElementById('basicinfo').appendChild(basicInfo);
            document.getElementById('otherinfo').appendChild(otherInfo);

        } else{
            alert("登录错误!");
            window.location.href="https://user.jdsj.site";
        }
    })
}

