(function($) {
    
    $('a.smooth-scroll').smoothScroll({
        offset: -$('nav.main').height()
    });
    
    // setInterval(function() {
    //     revealOnScroll();
    // }, 100);
    
    $(window).on('load scroll', function() {
        revealOnScroll();
    });
    
    function revealOnScroll() {
        var verticalScrollPosition = $(window).scrollTop();
        
        $('.reveal-on-scroll:not(.animated)').each(function() {
            var offsetTop = $(this).offset().top;
            var windowHeight = $(window).height();
            
            if(verticalScrollPosition + windowHeight > offsetTop) {
                $(this).css({
                    'visibility': 'visible'
                });
                
                $(this).addClass($(this).data('reveal-animation'));
                $(this).addClass('animated');
            } else {
                $(this).css({
                    'visibility': 'hidden'
                });
            }
        });
    }
    
})(jQuery);
