while(true) {
    var password = "";
    password = prompt('老婆亲亲 mua 输入密码吧', '');
    if(password != '20220814') {
        alert("你才不是我亲爱的老婆呢");
    } else {
        break;
    }
}
const toggle = document.querySelector('.lit')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('')//html
    if (html.classList.contains('white')) {
        html.classList.remove('white')
       

    } else {
        html.classList.add('white')
    
        
    }
})

function share_data_time() {
window.setTimeout("share_data_time()", 1000);
//毕业时间
BirthDay = new Date("8/14/2022 00:35:00");
//获取当前时间
today = new Date();
timeold = (today.getTime() - BirthDay.getTime()); //总豪秒数
secondsold = Math.floor(timeold / 1000);          //总秒数
e_daysold = timeold / (24 * 60 * 60 * 1000);
daysold = Math.floor(e_daysold);                 //相差天数
e_hrsold = (e_daysold - daysold) * 24;
hrsold = Math.floor(e_hrsold);                   //相差小时数
e_minsold = (e_hrsold - hrsold) * 60;
minsold= Math.floor(e_minsold)                   //相差分钟数
seconds = Math.floor((e_minsold - minsold) * 60);  //相差秒数
//将所获取的时间拼接到一起，再把值显示到页面
share_time.innerHTML = "爱你:" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}
share_data_time();
