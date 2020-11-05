$(document).ready(function(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $("#header").addClass("-active");
        } else {
        // 移除白色背景 => 透明
        $("#header").removeClass("-active");
        }
    });
});