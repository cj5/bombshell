$(document).ready(function(){
    function updateContainer() {
        var theHeight = $(window).height();
        var titleWrapperHeight = $('.title-wrapper').height();
        var titlePadding = theHeight/2-titleWrapperHeight/2;
        var navHeight = $('.main-nav ul').height(); 
        var scroll = $(window).scrollTop();
        
        //makes landing page full viewport height
        $('.landing').css('height', theHeight);
        $('.bg').css('height', theHeight);
        $('.title-wrapper').css('margin-top', titlePadding-navHeight*3);
        $('.title-wrapper').css('margin-bottom', titlePadding);
        
        $('.main-nav').css('padding-top', navHeight);
        $('.main-nav').css('padding-bottom', navHeight);

        $('.artists').css('top', theHeight);

        console.log('navHeight', navHeight);
    } 
    
    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });

});    
