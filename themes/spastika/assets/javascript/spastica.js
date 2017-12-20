(function() {

    var currentMusculeSlide = -1;
    var pauseMusculeSlide = false;

    // Slide svg muscules
    var $musculeSlides = ['left-top', 'right-top', 'right-bottom', 'left-bottom'];

    $('#muscules svg .marker').hover(
        function() {
            pauseMusculeSlide = true;
            var currentId = $(this).attr('id');
            $('#muscules svg image').attr('xlink:href', $(this).data("image"));
            $musculeSlides.forEach(function(item, index) {
                if (item == currentId) {
                    currentMusculeSlide = index;
                    $('#muscules svg #' + item + ' path').css({ fill: "#d5724b" });
                } else {
                    $('#muscules svg #' + item + ' path').css({ fill: "#656e79" });
                }
            });
        },
        function() {}
    );

    $('#muscules svg .marker').click(
        function() {
            pauseMusculeSlide = true;
            var currentId = $(this).attr('id');
            var currentAccordion = $(this).data("accordion");
            $('#muscules svg image').attr('xlink:href', $(this).data("image"));
            $('#muscule1-accordion').hide();
            $('#muscule2-accordion').hide();
            $('#muscule3-accordion').hide();
            $('#muscule4-accordion').hide();
            $musculeSlides.forEach(function(item, index) {
                if (item == currentId) {
                    currentMusculeSlide = index;
                    $('#' + currentAccordion).show();
                    doAnimations($('#' + currentAccordion));
                    $('#muscules svg #' + item + ' path').css({ fill: "#d5724b" });
                } else {
                    $('#muscules svg #' + item + ' path').css({ fill: "#656e79" });
                }
            });
        }
    );

    setInterval(function() {
        if (!pauseMusculeSlide) {
            currentMusculeSlide++;
            var currentId = $musculeSlides[currentMusculeSlide % 4];
            var $currentItem = $('#muscules svg #' + currentId);
            var currentAccordion = $currentItem.data("accordion");
            $('#muscules svg image').attr('xlink:href', $currentItem.data("image"));
            $('#muscule1-accordion').hide();
            $('#muscule2-accordion').hide();
            $('#muscule3-accordion').hide();
            $('#muscule4-accordion').hide();
            $musculeSlides.forEach(function(item, index) {
                if (item == currentId) {
                    currentMusculeSlide = index;
                    $('#' + currentAccordion).show();
                    doAnimations($('#' + currentAccordion));
                    $('#muscules svg #' + item + ' path').css({ fill: "#d5724b" });
                } else {
                    $('#muscules svg #' + item + ' path').css({ fill: "#656e79" });
                }
            });
        }
    }, 4000);

    // Youtube script
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var $playersProperties = [{
            playerId: 'focal-player1',
            videoId: 'yG0oBPtyNb0',
            buttonSelector: '#start-focal-player1'
        },
        {
            playerId: 'focal-player2',
            videoId: '0sB3Fjw3Uvc',
            buttonSelector: '#start-focal-player2'
        }
    ];

    var players = []

    onYouTubeIframeAPIReady = function() {
        $playersProperties.forEach(function(item) {
            players.push(new YT.Player(item.playerId, {
                height: 'auto',
                width: '100%',
                videoId: item.videoId, // youtube video id
                playerVars: {
                    'autoplay': 0,
                    'rel': 0,
                    'showinfo': 0
                },
                events: {
                    'onStateChange': function(event) {
                        if (event.data == YT.PlayerState.ENDED) {
                            $(item.buttonSelector).fadeIn('normal');
                        }
                        if (event.data == YT.PlayerState.PLAYING) {
                            $(item.buttonSelector).fadeOut('normal');
                        }
                    }
                }
            }));

            var currentLastIndex = players.length - 1;

            $(document).on('click', item.buttonSelector, function() {
                $(this).fadeOut('normal');
                players[currentLastIndex].playVideo();
            });
        });
    }

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

    var $clinicSearch = [{
            dropdownText: $('#dropdownClinicGeneralised'),
            dropdown: $('#dropdownClinicListGeneralised a'),
            resultBlock: $('#first-clinic-result'),
            resultList: $("#first-clinic-result ul"),
            searchDescription: $('#first-clinic-description'),
            resultListItemSelector: "#first-clinic-result li",
            resultMoreButtonSelector: "#next-first-clinic"
        },
        {
            dropdownText: $('#dropdownClinicRegional'),
            dropdown: $('#dropdownClinicListRegional a'),
            resultBlock: $('#second-clinic-result'),
            resultList: $("#second-clinic-result ul"),
            searchDescription: $('#second-clinic-description'),
            resultListItemSelector: "#second-clinic-result li",
            resultMoreButtonSelector: "#next-second-clinic"
        }
    ];

    $clinicSearch.forEach(function(item) {
        item.dropdown.click(function(e) {
            var $this = $(this);

            item.dropdownText.html($this.html());

            item.resultBlock.animate({
                "opacity": '0',
                "display": 'none'
            }, 500, function() {
                item.resultBlock.hide(500, function() {
                    item.resultList.empty();

                    var $selectedRegionClinics = queryClinics($this.data("region"), $regionGeneralisedClinics);

                    if ($selectedRegionClinics.length > 0) {
                        createQuestionElements($selectedRegionClinics, item.resultList);
                        item.searchDescription.html("Выберите <b>регион</b> в котором вы ищите клинику");
                        cropList($(item.resultListItemSelector), $(item.resultMoreButtonSelector));
                        item.resultBlock.show();
                        item.resultBlock.animate({
                            "opacity": '1',
                            "display": 'block'
                        }, 500);
                    } else {
                        item.searchDescription.html("<b>Извините, в данном регионе требуемых клиник нет.</b><br />Выберите <b>регион</b> в котором вы ищите клинику.");
                    }

                });
            });
            e.preventDefault();
        });
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

    // Carousel animations
    var $animatingBloks = [$('#carousel-life-quality'), $('#carousel-generalised-spastik'), $('#carousel-regional-spastik'), $('#carousel-focal-spastik')]

    $animatingBloks.forEach(function(item) {
        item.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        })
    });

    // Spasity causes animation
    $(document).scroll(function() {
        if ($(this).scrollTop() > 600) {
            var $animatingElems = $('#causes').find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        }
    });

})();