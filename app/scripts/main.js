$(document).ready(function(){
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
    });

    //toggles navicon when a is clicked from .menu only
    $('a.a-mobile').click(function(){
        $('#navicon').toggleClass('open');
        $('.menu').removeClass('open');
    });      


    //creates a smooth scroll when any a link is clicked
    // $('a').click(function(){
    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500);
    //     console.log('smooth scroll', this);
    //     return false;
    // });

    // $('a').click(function(){
    //     $('html, body').animate({
    //         scrollTop: $("#").offset().top
    //     }, 2000);
    //     return false;
    // });

    // $('a[href^="#"]').on('click',function (e) {
    //     e.preventDefault();

    //     var target = this.hash;
    //     var $target = $(target);

    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 900, 'swing', function () {
    //         window.location.hash = target;
    //     });
    // });

    // $("a").click(function(event) {
    //     event.preventDefault();
    //     $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
    //     });

    // 'catTopPosition' is the amount of pixels #cat
    // is from the top of the document
    // var artistsTopPosition = $('#artists').offset().top;
    
    // // When #scroll is clicked
    // $('a#artists').click(function(){
    //     // Scroll down to 'catTopPosition'
    //     $('html, body').animate({scrollTop:artistsTopPosition}, 500);
    //     // Stop the link from acting like a normal anchor link
    //     return false;
    // });


    // $(function() {
    //     $('a').click(function() {
    //         $('html,body').animate({'artists' : 0},1000);
    //     });
    // });

    function updateContainer() {
        var theHeight = $(window).height();
        var titleWrapperHeight = $('.title-wrapper').height();
        var titlePadding = theHeight/2-titleWrapperHeight/2;
        var navHeight = $('.main-nav ul').height(); 
        var scroll = $(window).scrollTop();
        
        //makes landing page full viewport height
        $('.landing').css('height', theHeight);
        $('.bg-color-filter').css('height', theHeight);
        $('.bg-color-filter-2').css('height', theHeight);
        $('.bg').css('height', theHeight);
        $('.title-wrapper').css('margin-top', titlePadding-navHeight*3);
        $('.title-wrapper').css('margin-bottom', titlePadding);
        
        $('.main-nav').css('padding-top', navHeight);
        $('.main-nav').css('padding-bottom', navHeight);

        $('.artists').css('top', theHeight);

        // if ($(window).innerWidth() <= 753) {
        //     $('.a').addClass('display-none');
        // // } else {
            
        // }

        // if ($(window).innerWidth() <= 753){
        //         menu.className = 'display-none';
        //     } else {
        //         menu.className ='display';
        //     }
           

        console.log('navHeight', navHeight);
    } 
    
    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });
}); 

