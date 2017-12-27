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

    function slideBrain(element, manual) {
        pauseBrainSlide = manual;
        var currentId = element.attr('id');
        var currentAccordion = element.data("accordion");
        doAnimations($('#brains svg image'));
        $('#brains svg image').attr('xlink:href', element.data("image"));
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