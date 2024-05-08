$(function(){
    //ハンバーガーメニュー
    $('#drawer-toggle').click(function(){
        $(this).toggleClass('open');
        $('#main-nav').fadeToggle(500);
    });

    $('#main-nav').click(function () {
        $('#drawer-toggle').removeClass('open');
        $('#main-nav').hide();
    });


});