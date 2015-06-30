(function($) {
    
    $('a.smooth-scroll').smoothScroll({
        offset: -$('nav.main').height()
    });
    
    // setInterval(function() {
    //     revealOnScroll();
    // }, 100);
    
    var animationElements = $('.reveal-on-scroll:not(.animated)');
    
    animationElements.each(function() {
        $(this).css({
            'visibility': 'hidden'
        }); 
    });
    
    $(window).on('load scroll', function() {
        revealOnScroll();
    });
    
    function revealOnScroll() {
        var verticalScrollPosition = $(window).scrollTop();
        
        animationElements.each(function() {
            var animationElement = $(this);
            
            var offsetTop = animationElement.offset().top;
            var windowHeight = $(window).height();
            
            if(verticalScrollPosition + windowHeight > offsetTop) {
                setTimeout(function() {
                    animationElement.css({
                        'visibility': 'visible'
                    });
                    
                    animationElement.addClass(animationElement.data('reveal-animation'));
                    animationElement.addClass('animated');
                }, animationElement.data('reveal-after'));
            }
        });
    }
    
})(jQuery);
