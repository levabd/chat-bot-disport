(function() {

    // Buttons
    $(".more-about-spastik").click(function(e) {
        $('html, body').animate({
            scrollTop: $("#treatment").offset().top - 80
        }, 2000);
        e.preventDefault();
    });

    // Slide svg brains

    var currentBrainSlide = -1;
    var pauseBrainSlide = false;
    var currentBrain1 = "";

    $('#brain1-accordion').on('show.bs.collapse', function(e) {
        var currentImageUrl = $('#brains svg image').attr('xlink:href');
        var urlPrefix = currentImageUrl.substr(0, currentImageUrl.lastIndexOf('/'));
        if (e.target.getAttribute('id') == "brain1CollapseOne") {
            currentBrain1 = urlPrefix + "/brain1_1.png";
        } else if (e.target.getAttribute('id') == "brain1CollapseTwo") {
            currentBrain1 = urlPrefix + "/brain1_2.png";
        } else if (e.target.getAttribute('id') == "brain1CollapseThree") {
            currentBrain1 = urlPrefix + "/brain1_3.png";
        } else if (e.target.getAttribute('id') == "brain1CollapseFour") {
            currentBrain1 = urlPrefix + "/brain1_4.png";
        }
        $('#brains svg image').attr('xlink:href', currentBrain1);
        doAnimations($('#brains svg image'));
    });

    function slideBrain(element, manual) {
        pauseBrainSlide = manual;
        var currentId = element.attr('id');
        var currentAccordion = element.data("accordion");
        doAnimations($('#brains svg image'));
        var imageUrl = element.data("image");
        if (currentId == "left") {
            if (currentBrain1) {
                imageUrl = currentBrain1;
            }
        }
        $('#brains svg image').attr('xlink:href', imageUrl);
        $('#brain1-accordion').hide();
        $('#brain2-accordion').hide();
        ['left', 'right'].forEach(function(item, index) {
            if (item == currentId) {
                currentBrainSlide = index;
                $('#' + currentAccordion).show();
                doAnimations($('#' + currentAccordion));
                $('#brains svg #' + item + ' path').css({ fill: "#d5724b" });
                if (!manual) {
                    var $animatingElems = $('#brains svg #' + item).find("[data-animation ^= 'animated']");
                    doAnimations($animatingElems);
                }
            } else {
                $('#brains svg #' + item + ' path').css({ fill: "#656e79" });
            }
        });
    }

    $('#brains svg .marker').hover(
        function() {
            slideBrain($(this), true);
        },
        function() {}
    );

    $('#brains svg .marker').click(
        function() {
            slideBrain($(this), true);
        }
    );

    setInterval(function() {
        if (!pauseBrainSlide) {
            currentBrainSlide++;
            var currentId = ['left', 'right'][currentBrainSlide % 2];
            var $currentItem = $('#brains svg #' + currentId);
            slideBrain($currentItem, false);
        }
    }, 4000);

    // Spasity causes animation
    var spasityCausesAnimated = false;

    $(document).scroll(function() {
        if ($(this).scrollTop() > 600 && !spasityCausesAnimated) {
            var $animatingElems = $('#causes').find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
            spasityCausesAnimated = true;
        }
    });

})();