$(function(){
    "use strict"

    let winH=$(window).height(),
        upperH=$('.upper-bar').innerHeight(),
        navbar= $('.navbar').innerHeight(),
        about=$('.about').innerHeight(),
        pricing=$('.pricing').innerHeight(),
        contact=$('.contact').innerHeight()

    $('.slider , .carousel-item').height(winH - (upperH + navbar+about+pricing+contact+500));

    if ($(window).width() <= 567) {
        $('.slider').height(700)
        $('.carousel-item').height(694)
    }

    if ($(window).width() <= 567) {
        $('.display').hide()
    }

    $(window).on('resize',function(){
        if ($(window).width() <= 567) {
            $('.display').hide()
        }
    })
      
    

    $('.featured-work li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') == 'all') {
            $('.images img').css('opacity', 1);
        }else{
            $('.images img').css('opacity', .08);
            $($(this).data('class')).css('opacity', 1);
        }
    });

    
    $('#contact').on('click', function () {
        let contact=document.getElementsByClassName('contact')[0]
        
        contact.scrollIntoView({behavior:"smooth" , block:"center"})
    });

    $('#about').on('click', function () {
        let about=document.getElementsByClassName('about')[0]
        
        about.scrollIntoView({behavior:"smooth" , block:"center"})
    });

    $('#features').on('click', function () {
        let features=document.getElementsByClassName('feature')[0]
        
        features.scrollIntoView({behavior:"smooth" , block:"center"})
    });

    $('#pricing').on('click', function () {
        let pricing=document.getElementsByClassName('pricing')[0]
        
        pricing.scrollIntoView({behavior:"smooth" , block:"center"})
    });

    $('.pricing .btn').on('click', function () {
        let contact=document.getElementsByClassName('contact')[0]
        
        contact.scrollIntoView({behavior:"smooth" , block:"center"})
    });
})