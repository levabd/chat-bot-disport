(function() {

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
    });

    // Spastica Clinic Search
    function createQuestionElement(clinic) {
        return "<li><div class='type'>Медицинское учереждение</div><h5>" + clinic.name + "</h5><div class='row justify-content-between'><div class='col-lg-5 col-6'>" +
            clinic.description + "</div><div class='col-lg-5 col-6'><a href='https://www.google.com/maps/search/?api=1&query=" + clinic.address +
            "' class='map-pin' target='_blank'>Ссылка на карту</a></div></div><div class='row justify-content-between'><div class='col-lg-5 col-6'>" + clinic.address +
            "</div><div class='col-lg-5 col-6 phone'>" + clinic.phone + "</div></div></li>";
    }

    function createQuestionElements(selectedRegionClinics, element) {
        selectedRegionClinics.forEach(function(clinic) {
            element.append(createQuestionElement(clinic));
        });
    }

    function queryClinics(regionId, clinicList) {
        var $selectedRegionClinics = [];

        if (typeof regionId !== 'undefined') {
            clinicList.forEach(function(clinic) {
                if (clinic.region_id == regionId) {
                    $selectedRegionClinics = clinic.clinics
                }
            });
        }

        return $selectedRegionClinics;
    }

    $('#dropdownClinicListGeneralised a').click(function(e) {
        var $this = $(this);

        $('#first-clinic-result').animate({
            "opacity": '0',
            "display": 'none'
        }, 500, function() {
            $('#first-clinic-result').hide(500, function() {
                $("#first-clinic-result ul").empty();

                var $selectedRegionClinics = queryClinics($this.data("region"), $regionGeneralisedClinics);

                if ($selectedRegionClinics.length > 0) {
                    createQuestionElements($selectedRegionClinics, $("#first-clinic-result ul"));
                    $('#first-clinic-description').html("Выберите <b>регион</b> в котором вы ищите клинику");
                    cropList($("#first-clinic-result li"), $("#next-first-clinic"));
                    $('#first-clinic-result').show();
                    $('#first-clinic-result').animate({
                        "opacity": '1',
                        "display": 'block'
                    }, 500);
                } else {
                    $('#first-clinic-description').html("<b>Извините, в данном регионе требуемых клиник нет.</b><br />Выберите <b>регион</b> в котором вы ищите клинику.");
                }

            });
        });
        e.preventDefault();
    });

    $('#dropdownClinicListRegional a').click(function(e) {
        var $this = $(this);

        $('#second-clinic-result').animate({
            "opacity": '0',
            "display": 'none'
        }, 500, function() {
            $('#second-clinic-result').hide(500, function() {
                $("#second-clinic-result ul").empty();

                var $selectedRegionClinics = queryClinics($this.data("region"), $regionRegionalClinics);

                if ($selectedRegionClinics.length > 0) {
                    createQuestionElements($selectedRegionClinics, $("#second-clinic-result ul"));
                    $('#second-clinic-description').html("Выберите <b>регион</b> в котором вы ищите клинику");
                    cropList($("#second-clinic-result li"), $("#next-second-clinic"));
                    $('#second-clinic-result').show();
                    $('#second-clinic-result').animate({
                        "opacity": '1',
                        "display": 'block'
                    }, 500);
                } else {
                    $('#second-clinic-description').html("<b>Извините, в данном регионе требуемых клиник нет.</b><br />Выберите <b>регион</b> в котором вы ищите клинику.");
                }

            });
        });
        e.preventDefault();
    });

    // Load More Clinic List

    function cropList(firstClinicList, firstClinicButton) {
        var numToShow = 3;
        var numInFirstClinicList = firstClinicList.length;
        firstClinicList.hide();
        if (numInFirstClinicList > numToShow) {
            firstClinicButton.show();
        }
        firstClinicList.slice(0, numToShow).show();

        firstClinicButton.off("click");
        firstClinicButton.click(function(e) {
            var showing = firstClinicList.filter(':visible').length;
            firstClinicList.slice(showing - 1, showing + numToShow).fadeIn();
            var nowShowing = firstClinicList.filter(':visible').length;
            if (nowShowing >= numInFirstClinicList) {
                firstClinicButton.hide();
            }
            e.preventDefault();
        });
    }


    // Scroll Position Indicator
    $(window).on('scroll', function() {

        var docHeight = $(document).height(),
            winHeight = $(window).height();

        var viewport = docHeight - winHeight,
            positionY = $(window).scrollTop();

        var indicator = (positionY / (viewport)) * 100;

        $('.scroll-bar .fill').css('width', indicator + '%');


    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
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

    // Carousel animations
    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data('animation');

            // Add animate.css classes to
            // the elements to be animated 
            // Remove animate.css classes
            // once the animation event has ended
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    var $animatingBloks = [$('#carousel-life-quality'), $('#carousel-generalised-spastik'), $('#carousel-regional-spastik')]

    $animatingBloks.forEach(function(item) {
        item.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        })
    });
})();