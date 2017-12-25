(function() {

    // Tips
    $('[data-toggle="popover"]').popover();

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
    });

    // Scroll Position Indicator
    $(window).on('scroll', function() {

        var docHeight = $(document).height(),
            winHeight = $(window).height();

        var viewport = docHeight - winHeight,
            positionY = $(window).scrollTop();

        var indicator = (positionY / (viewport)) * 100;

        $('.scroll-bar .fill').css('width', indicator + '%');


    });

    $("#upper").click(function(e) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        e.preventDefault();
    });

    // Scrolling navbar effects
    /*var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 80) {
            if (!fixed) {
                fixed = true;
                $('#navbar').css({
                    "padding": '0 1rem',
                    "border-bottom": 'thin solid rgba(40, 40, 40, .3)'
                });
                $('nav .container').css({
                    "padding": '0 15px'
                });
                $('.navbar-collapse .active a::after').css({
                    "bottom": '13px'
                });
                $('.navbar-collapse .btn-primary').css({
                    "padding": '.5rem 1.65rem'
                });*/
    /*$('.socials:before').css({
                    "border-left": 'thin solid rgba(40, 40, 40, .3)'
                });
                $('.socials').addClass("socials-black");
                $('#navbar').addClass("navbar-light");
                $('#navbar').removeClass("navbar-inverse");
                $('.navbar .navbar-nav .nav-link, .navbar-brand, .navbar-brand:hover').css({
                    color: '#333'
                }) * /
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#navbar').css({
                    //"padding": '8px 16px',
                    "border-bottom": 'none'
                });
                /*$('nav .container').css({
                    "padding": '.5rem 1rem'
                });
                $('.navbar-collapse .active a::after').css({
                    "bottom": '1px'
                });
                $('.navbar-collapse .btn-primary').css({
                    "padding": '.8rem 2.35rem'
                });*/
    /*$('.socials').removeClass("socials-black");
                $('#navbar').addClass("navbar-inverse");
                $('#navbar').removeClass("navbar-light");
                $('.navbar .navbar-nav .nav-link, .navbar-brand, .navbar-brand:hover').css({
                    color: '#fff'
                })
            }
        }
    });*/
})();