(function() {

    // Tips
    $('[data-toggle="popover"]').popover();

    // Close popover when clicking anywhere on the screen
    $(document).on('click', function(e) {
        $('[data-toggle="popover"],[data-original-title]').each(function() {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            var target = $(e.target);
            if (!target.is('.popover') && !target.is('.popover *') && !target.is('.btn') && !target.is('.nav-link') && !target.is('.simple-link') && !target.is('.nav-link') && !target.is('.btn-outline-secondary') || target.is('.btn-popover-close')) {
                (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false;
                e.preventDefault();
            }
        });
    });

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
    });

    $("#upper").click(function(e) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        e.preventDefault();
    });

    // Scrolling effects
    $(document).scroll(function() {


        // Scroll Position Indicator
        var docHeight = $(document).height(),
            winHeight = $(window).height();

        var viewport = docHeight - winHeight,
            positionY = $(window).scrollTop();

        var indicator = (positionY / (viewport)) * 100;

        $('.scroll-bar .fill').css('width', indicator + '%');


        var windowWidth = $(window).width();
        var defaultOffset = (windowWidth > 992) ? 855 : 410;
        var newOffset = defaultOffset - $(window).scrollTop() > 100 ? defaultOffset - $(window).scrollTop() : 100;
        $("#share").stop().animate({
            top: newOffset + "px"
        });

        if (windowWidth > 992) {
            return false;
        }
        var lastScrollTop = 0;
        var hiddenMenu = false;
        var st = $(this).scrollTop();
        if (Math.abs(st - lastScrollTop) < 43) {
            return false;
        }
        if (st > lastScrollTop) {
            if (($(this).scrollTop() > 42) && (!hiddenMenu)) {
                $('nav.container').hide();
                $('#layout-header').animate({
                    "height": "0"
                }, 200);
                $('#layout-header nav').animate({
                    "height": "0"
                }, 200);
                $('#layout-content').animate({
                    "margin-top": "0"
                }, 200);
                hiddenMenu = true;
            }
        } else {
            if (hiddenMenu) {
                $('#layout-header').animate({
                    "height": "42px"
                }, 200);
                $('#layout-header nav').animate({
                    "height": "42px"
                }, 200);
                $('#layout-content').animate({
                    "margin-top": "42px"
                }, 200);
                $('nav.container').show();
                hiddenMenu = false;
            }
        }
        lastScrollTop = st;
    });

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