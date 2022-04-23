/* Skript na skrolování */
$(window).scroll(function() {
    var window_position = $(window).scrollTop();
    $('.nav a[href^="#"]').each(function() { 
		var nav_item = $(this);
        var target = $(nav_item.attr("href"));
        
        if (target.length > 0) {
            if (target.position().top + target.height() > window_position && target.position().top-10 <= window_position) {
                $('.nav a').removeClass("active");
                nav_item.addClass("active");
            }
        }
    });
});