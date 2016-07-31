$(document).ready(function(){

    //creates a smooth scroll when any a link is clicked
    // $('#artists').click(function(){
    //     $('html, body').animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top
    //     }, 500);
    //     return false;
    // });

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


