function showLogin(){
    let spanLogin = document.getElementById("spanLogin");
    
    if(spanLogin.innerText == '登出'){
      // document.getElementById('memName').innerText = '';
      document.getElementById('spanLogin').innerText = '會員登入';
    }else{
      document.getElementById('container').style.display = '';
    }
}
function sendForm(e){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username != 'yy' || password != '111'){
        alert('請輸入正確帳號密碼');
        e.preventDefault();
        return;
    }else{
        alert('登入成功');
        // document.getElementById("memName").innerText = '董董';
        document.getElementById('spanLogin').innerText = '登出';
        document.getElementById('container').style.display = 'none';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
function cancelLogin(){
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('container').style.display = 'none';
}
function init(){
    document.getElementById('spanLogin').onclick = showLogin;
    document.querySelector('.btn-signin').onclick = sendForm;
    document.querySelector('.btn-signin-cancel').onclick = cancelLogin;
    document.querySelector('.signupCancel').onclick = cancelLogin;
}
window.addEventListener("load", init, false);
// 
$(document).ready(function(){
    $(function() {
        $(".btn").click(function() {
            $(".form-signin").toggleClass("form-signin-left");
            $(".form-signup").toggleClass("form-signup-left");
            $(".frame").toggleClass("frame-long");
            $(".signup-inactive").toggleClass("signup-active");
            $(".signin-active").toggleClass("signin-inactive");
            $(".forgot").toggleClass("forgot-left");   
            $(this).removeClass("idle").addClass("active");
        });
    });
    // $(function() {
    //     $(".btn-signup").click(function() {
    //         $(".nav").toggleClass("nav-up");
    //         $(".form-signup-left").toggleClass("form-signup-down");
    //         $(".success").toggleClass("success-left"); 
    //         $(".frame").toggleClass("frame-short");
    //     });
    // });

//     $(function() {
//         $(".btn-signin").click(function() {
//             $(".btn-animate").toggleClass("btn-animate-grow");
//             $(".welcome").toggleClass("welcome-left");
//             $(".cover-photo").toggleClass("cover-photo-down");
//             $(".frame").toggleClass("frame-short");
//             $(".profile-photo").toggleClass("profile-photo-down");
//             $(".btn-goback").toggleClass("btn-goback-up");
//             $(".forgot").toggleClass("forgot-fade");
//         });
//     });
});


// 點選空白處隱藏彈出層
// $(function(){
//     $('#spanLogin').click(function(e){
//         // 取消冒泡
//         e.stopPropagation();
//     });
//     $(document).click(function(e){
//         let _con = $('#container');  // 設定目標區域
//         if(!_con.is(e.target) && _con.has(e.target).length === 0){
//             $('#container').hide(1000);
//         }

//     });
// });