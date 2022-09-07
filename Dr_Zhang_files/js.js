/* 
* @Author: 扶摇
* @Date:   2017-11-13 14:50:02
* @Last Modified by:   扶摇
* @Last Modified time: 2017-11-14 16:20:30
*/

$(document).ready(function(){
     var winWidth = $(window).width();
    // 校友专栏
    $(window).load(function(){
        var winHeight;
        function aa() {
            winHeight = $('.other-banner').height();
            $('.other-banner .oth_rel').height(winHeight);

            if(winWidth>1023){
                win_h1 = $('.coop_d3').height();
                $('.coop_d1_m').height(win_h1);

                win_h2 = $('.coop_w3').height();
                $('.coop_w1,.coop_w2').height(win_h2);
            }
        }
        aa();
        $(window).resize(function(){
            aa();
        })
    }) 

    // 研究团队
    $('.team_t2_m').hide();
    $('.team_t2_m:first').show();
    $('.team_t1 h3').click(function(){
        var index1=$(this).index();
        $(this).addClass('h3_on').siblings('h3').removeClass('h3_on');
        $('.team_t2k').children('.team_t2_m').eq(index1).show().siblings().hide();
    })

    // 教师详情页
    $('.tea_d4').hide();
    $('.tea_d4:first').show();
    $('.tea_d3 a').click(function(){
        var index2=$(this).index();
        $(this).addClass('tea_on').siblings('a').removeClass('tea_on');
        $('.tea_d3m').children('.tea_d4').eq(index2).show().siblings().hide();
    }) 
});