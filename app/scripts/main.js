console.log('test')

$(document).ready(function() {
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
    });

    //toggles navicon when a is clicked from .menu only
    $('a.a-mobile').click(function(){
        $('#navicon').toggleClass('open');
        $('.menu').removeClass('open');
    }); 

    // smooth scroll
    // $('a[href^="#"]').on('click',function (e) {
    //   e.preventDefault();
    //   var target = this.hash,
    //   $target = $(target);
    //   $('html, body').stop().animate({
    //     'scrollTop': $target.offset().top
    //   }, 500, 'swing', function () {
    //     window.location.hash = target;
    //   }); 
    // });

    // $(document).on('click', 'a[href^="#"]', function (event) {
    //     event.preventDefault();

    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500);
    // });

    function updateContainer() {
        var theHeight = $(window).height();
        var titleWrapperHeight = $('.title-wrapper').height();
        var titlePadding = theHeight / 2 - titleWrapperHeight / 2;
        var navHeight = $('.main-nav ul').height(); 
        var scroll = $(window).scrollTop();
        
        //makes landing page full viewport height
        $('.landing').css('height', theHeight);
        $('.bg-color-filter').css('height', theHeight);
        $('.bg-color-filter-2').css('height', theHeight);
        $('.bg').css('height', theHeight);
        $('.title-wrapper').css('margin-top', titlePadding - navHeight * 3);
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

// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     return false;
// }); 

