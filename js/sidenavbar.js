// Fix Navbar to the top of the window when scrolling below header
$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('#header').height())
        {
            $('#sticky').fadeIn(400).addClass('fixed');
        }
        else
        {
            $('#sticky').fadeIn(400).removeClass('fixed');
        }
    });
});

// Smooth scrolling using the side navbar
$(document).on('click', '.sidenavbar-button', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});


