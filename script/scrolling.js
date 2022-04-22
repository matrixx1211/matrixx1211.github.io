$('.nav li').find('a[href^="#"]').click(function(event) { 
    // Prevent from default action to intitiate
    event.preventDefault();

    $('.nav li a').removeClass("active");
    $(this).addClass("active");


    // The id of the section we want to go to.
    var anchorId = $(this).attr("href");
    
    // Our scroll target : the top position of the
    // section that has the id referenced by our href.
    var target = $(anchorId).offset().top - offset;
    //console.log(target);
    
    
    $('html, body').animate({ scrollTop: target }, 500, function () {
        //window.location.hash = '!' + id;
        window.location.hash = anchorId;        
    });
    

});

function setActiveListElements(event){
    // Get the offset of the window from the top of page
    var windowPos = $(window).scrollTop();
    $('.nav li a[href^="#"]').each(function() { 
		var anchorId = $(this);
        var target = $(anchorId.attr("href"));
        
        if (target.length > 0) {
            if (target.position().top <= windowPos && target.position().top + target.height() > windowPos) {
                $('.nav li a').removeClass("active");
                anchorId.addClass("active");
            }
        }
    });
}

$(window).scroll(function() {
    setActiveListElements();
});