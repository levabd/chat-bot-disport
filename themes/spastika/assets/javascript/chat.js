(function() {

    var $messages = $('.messages-content');

    var dialogCreated = false;
    var answerNumber = 0;

    $('#close_chat_window').click(function() {
        $('.chat').hide();
        $('#chat_toggle').show();
        return false;
    })

    $('#minim_chat_window').click(function() {
        if (!$('#minim_chat_window').hasClass('panel-collapsed')) {
            $('.chat').animate({
                height: "95px"
            }, "slow", function() {
                $('#minim_chat_window').addClass('panel-collapsed');
                $('#minim_chat_window div').removeClass('window-minimize-thin').addClass('window-maximize-thin');
            });
        } else {
            $('.chat').animate({
                height: "80vh"
            }, "slow", function() {
                $('#minim_chat_window').removeClass('panel-collapsed');
                $('#minim_chat_window div').removeClass('window-maximize-thin').addClass('window-minimize-thin');
            });
        }
        return false;
    });

    function openChat() {
        $messages.mCustomScrollbar();
        $('.chat').show();
        $('#chat_toggle').hide();
        if (!dialogCreated) {
            setTimeout(function() {
                typeBotMessage('');
            }, 100);
        }
    }

    $('.open-chat-toggle').click(function() {
        openChat();
        return false;
    });

    $('#chat_toggle').click(function() {
        openChat();
        return false;
    });

    function updateScrollbar() {
        $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
            scrollInertia: 10,
            timeout: 0
        });
    }

    function setDate() {
        var d = new Date(),
            h, m;
        if (m != d.getMinutes()) {
            m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            h = (d.getHours() < 10 ? '0' : '') + d.getHours();
            $('<div class="timestamp">' + h + ':' + m + '</div>').appendTo($('.message:last'));
        }
    }

    function insertMessage(predefinded) {
        if (predefinded !== undefined) {
            typeAutoBotMessage(predefinded);
            return true;
        }

        msg = $('.message-input').val();
        if ($.trim(msg) == '') {
            return false;
        }

        $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
        answerNumber++;

        setDate();
        $('.message-input').val(null);
        updateScrollbar();
        setTimeout(function() {
            typeBotMessage(msg);
        }, 100 + Math.random() * 100);
    }

    $('.message-submit').click(function() {
        insertMessage();
        return false;
    });

    $(window).on('keydown', function(e) {
        if (e.which == 13) {
            insertMessage();
            return false;
        }
    })

    var Fake = [
        'Вот и поговорили',
        'Тебя в гугле забанили?',
        'Википедия в помощь',
        'О чем ты вообще?',
        'А в Африке дети голодают',
        'Я всего лишь сетевой бот тролль',
        'Думаю, на самом деле ты хороший человек, но так делать не стоит',
        'Почему ты так думаешь?',
        'Не мог бы ты пояснить?',
        'Так или иначе — мне надо идти',
        'Я был очень рад поговорить с тобой',
        'Пока пока',
        ':)'
    ]

    var patterns = [{
            question: "(З|з)овут (.*)",
            order: "any",
            answer: "Приятно познакомиться $2. Чем могу Вам помочь?"
        },
        {
            question: "(И|и)мя (.*)",
            order: "any",
            answer: "Приятно познакомиться $2. Чем могу Вам помочь?"
        },
        {
            question: "(Я|я) (.*)",
            order: 1,
            answer: "Приятно познакомиться $2. Чем могу Вам помочь?"
        },
        {
            question: "(.*)",
            order: 1,
            answer: "Приятно познакомиться $1. Чем могу Вам помочь?"
        }
    ]

    var defaultAnswer = 'Проект SPASTICA – информационный ресурс о реабилитации пациентов, перенесших инсульт. Мы информируем о современных подходах и помогаем пациентам записаться на консультацию к профильным специалистам. Дополнительно на нашем веб-сайте вы можете скачать брошуру с информацией о современных подходах реабилитации для пациентов, перенесших инсульт';

    // Insult
    var insultWelcome = 'Добрый день, я – ваш виртуальный помощник. Проект SPASTICA – информационный ресурс о реабилитации пациентов, перенесших инсульт. Мы информируем о современных подходах и помогаем пациентам записаться на консультацию к профильным специалистам. Дополнительно на нашем веб-сайте вы можете скачать брошуру с информацией о современных подходах реабилитации для пациентов, перенесших инсульт.';
    var insultEffects = "Распространенные осложнения после инсульта – порез, развитие мышечной спастичности и появление контрактуры, которые мешают восстановлению двигательной функции. Более подробную информацию по этому вопросу мы сможете узнать из разделов <a class='simple-link' href='./spastika'>Спастичность</a> и <a class='simple-link' href='./reabilitation'>Реабилитация</a> после инсульта";
    var insultTherapy = "<a class='simple-link' href='./spastika'>Узнать детальнее о спастичности и ее причинах</a><br /><a class='simple-link' href='./reabilitation'>Узнать детальнее о реабилитации после инсульта</a>";

    var insultEffectsShown = false;
    var insultTherapyShown = false;
    var insultWelcomeShown = false;

    // Spastika
    var spastikaWelcome = 'Добрый день, я – ваш виртуальный помощник. Проект SPASTICA – информационный ресурс о реабилитации пациентов, перенесших инсульт. Мы информируем о современных подходах и помогаем пациентам записаться на консультацию к профильным специалистам. Дополнительно на нашем веб-сайте вы можете скачать брошуру с информацией о современных подходах реабилитации для пациентов, перенесших инсульт.<br />Спастичность – это патологическое напряжение мышц, которое вызывает контрактуры - изменение в мышцах, сухожилиях и суставе.';
    var spastikaWelcomeElse = 'Спастичность – это патологическое напряжение мышц, которое вызывает контрактуры - изменение в мышцах, сухожилиях и суставе.';
    var spastikaHands = "Для различных видов спастичности используются различные виды терапии. Более подробную информацию вы можете узнать ниже в разделе Виды спастичности";
    var modernDeseases = "Современные методы терапии и реабилитации после инсульта позволяют уменьшить спастичность, чтобы сконцентировать усилия на восстановлении двигательной функции. Выбор конкретного вида терапии зависит от вида спастичности у пациента. Более детальная информация приведена в разделе Виды спастичности.";

    var spastikaWelcomeShown = false;
    var spastikaHandsShown = false;
    var modernDeseasesShown = false;

    // Reabilitation
    var reabilitationWelcome = 'Добрый день, я – ваш виртуальный помощник. Проект SPASTICA – информационный ресурс о реабилитации пациентов, перенесших инсульт. Мы информируем о современных подходах и помогаем пациентам записаться на консультацию к профильным специалистам. Дополнительно на нашем веб-сайте вы можете скачать брошуру с информацией о современных подходах реабилитации для пациентов, перенесших инсульт.<br />Раздел «Реабилитация» содержит информацию о современных подходах реабилитации пациентов после инсульта.';
    var reabilitationWelcomeElse = 'Раздел «Реабилитация» содержит информацию о современных подходах реабилитации пациентов после инсульта.';

    var reabilitationWelcomeShown = false;

    switch (pageName) {
        case "insult":
            {
                var insult_effects_offset = $('#insult-effects').offset().top;
                $('#insult-effects a.btn').click(function() {
                    if (!insultEffectsShown) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        insultEffectsShown = true;
                        insertMessage(insultEffects);
                    }
                    return false;
                });
                var insult_therapy_offset = $('#insult-therapy').offset().top;
                $('#insult-therapy a.btn').click(function() {
                    if (!insultTherapyShown) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        insultTherapyShown = true;
                        insertMessage(insultTherapy);
                    }
                    return false;
                });
            }
            /*case "reabilitation":
                return insultWelcome;*/
        case "spastika":
            {
                var hand_normal_offset = $('#hand-normal').offset().top;
                $('#hand-normal a.btn').click(function() {
                    if (!spastikaHandsShown) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        spastikaHandsShown = true;
                        insertMessage(spastikaHands);
                    }
                    return false;
                });
                var life_quality_offset = $('#life-quality').offset().top;
                $('#life-quality a.btn').click(function() {
                    if (!modernDeseasesShown) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        modernDeseasesShown = true;
                        insertMessage(modernDeseases);
                    }
                    return false;
                });
            }
    }

    $(document).scroll(function() {
        switch (pageName) {
            case "insult":
                {
                    if (($(this).scrollTop() > insult_effects_offset) && (!insultEffectsShown)) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        insultEffectsShown = true;
                        insertMessage(insultEffects);
                    }
                    if (($(this).scrollTop() > insult_therapy_offset) && (!insultTherapyShown)) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        insultTherapyShown = true;
                        insertMessage(insultTherapy);
                    }
                }
                /*case "reabilitation":
                    return insultWelcome;*/
            case "spastika":
                {
                    if (($(this).scrollTop() > hand_normal_offset) && (!spastikaHandsShown)) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        spastikaHandsShown = true;
                        insertMessage(spastikaHands);
                    }
                    if (($(this).scrollTop() > life_quality_offset) && (!modernDeseasesShown)) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        modernDeseasesShown = true;
                        insertMessage(modernDeseases);
                    }
                }
        }
    });

    function generateBotMessage(request) {
        switch (pageName) {
            case "insult":
                {
                    if (!insultWelcomeShown) {
                        insultWelcomeShown = true;
                        return insultWelcome;
                    } else {
                        break;
                    }
                }
            case "reabilitation":
                {
                    if (!reabilitationWelcomeShown) {
                        reabilitationWelcomeShown = true;
                        return (document.referrer.indexOf(location.protocol + "//" + location.host) === 0) ? reabilitationWelcomeElse : reabilitationWelcome;
                    } else {
                        break;
                    }
                }
            case "spastika":
                {
                    if (!spastikaWelcomeShown) {
                        spastikaWelcomeShown = true;
                        return (document.referrer.indexOf(location.protocol + "//" + location.host) === 0) ? spastikaWelcomeElse : spastikaWelcome;
                    } else {
                        break;
                    }
                }
        }

        return defaultAnswer;

        /*        
        var welcome = 'Меня зовут Камилов Сергей Анварович. Врач невролог, врач ЛФК-реабилитолог.<br /><br /> Как Вас зовут?';
        var sorry = 'Извините, я не совсем Вас понимаю. Напишите пожалуйста ваш вопрос.';
        var insultEffects = "Распространенные осложнения после инсульта – порез, развитие мышечной спастичности и появление контрактуры, которые мешают восстановлению двигательной функции. Более подробную информацию по этому вопросу мы сможете узнать из разделов Спастичность и Реабилитация после инсульта"
        var emptySorry = 'Напишите пожалуйста ваш вопрос.';

        if (request == '') {
            if (!dialogCreated) {
                dialogCreated = true;
                return welcome;
            }

            return emptySorry;
        }

        for (var i = 0; i < patterns.length; i++) {
            var pattern = patterns[i];
            var r = new RegExp(pattern.question, "i");
            var matches = request.match(r);

            if ((matches && pattern.order == 'any') || (matches && pattern.order == answerNumber)) {
                var response = pattern.answer;
                if (response != undefined) {
                    for (var j = 1; j < matches.length; j++) {
                        response = response.replace("$" + j, matches[j]);
                    }
                }

                return response;
            }
        }

        return sorry;
        */
    }

    function typeAutoBotMessage(msg) {
        $('<div class="message loading new"><figure class="avatar"><img src="themes/spastika/assets/images/main_avatar.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();

        setTimeout(function() {
            $('.message.loading').remove();
            $('<div class="message new"><figure class="avatar"><img src="themes/spastika/assets/images/main_avatar.png" /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
            setDate();
            updateScrollbar();
        }, 1000 + (Math.random() * 20) * 100);
    }

    function typeBotMessage(request) {
        if ($('.message-input').val() != '') {
            return false;
        }
        $('<div class="message loading new"><figure class="avatar"><img src="themes/spastika/assets/images/main_avatar.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();

        setTimeout(function() {
            $('.message.loading').remove();
            $('<div class="message new"><figure class="avatar"><img src="themes/spastika/assets/images/main_avatar.png" /></figure>' + generateBotMessage(request) + '</div>').appendTo($('.mCSB_container')).addClass('new');
            setDate();
            updateScrollbar();
        }, 1000 + (Math.random() * 20) * 100);

    }

})();