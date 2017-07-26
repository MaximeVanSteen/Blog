
$(document).ready(function() {
    // Fix Navbar to the top of the window when scrolling below header
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
    // Prevent dropdown from closing after selecting an item
    $('.dropdown-menu').on({
        "click":function(e){
            e.stopPropagation();
        }
    });
    // scroll smoothly to the selected item
    $('.sidenavbar-button').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });
});





