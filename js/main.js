$(function(){
    "use strict"

    let winH=$(window).height(),
        upperH=$('.upper-bar').innerHeight(),
        navbar= $('.navbar').innerHeight();

    $('.slider , .carousel-item').height(winH - (upperH + navbar));

    $('.featured-work li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') == 'all') {
            $('.images img').css('opacity', 1);
        }else{
            $('.images img').css('opacity', .08);
            $($(this).data('class')).css('opacity', 1);
        }
    });
})