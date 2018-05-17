(function() {

    var avatarBase64 = "data:image/png;base64,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";

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
    
    var buttonPressed = false;

    function openChat() {
        if (!buttonPressed){
    		ga('send', 'event', 'chat_open','view','chat_open');
    	}
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
        ga('send', 'event', 'chat_click','click','chat_click');
        buttonPressed = true;
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
    var insultWelcome = 'В этом разделе собрана краткая информация о природе инсульта, его проявлении и последствиях.';
    var insultEffects = "Часто после инсульта возникают парез, контрактуры, развивается мышечная спастичность, которая мешает движению. Разделы <a class='simple-link' href='" + rootPath + "/ru/spastika'>Спастичность</a> и <a class='simple-link' href='" + rootPath + "/ru/reabilitation'>Реабилитация</a> содержат детальную информацию об этом.";
    var insultTherapy = "<a class='simple-link' href='" + rootPath + "/ru/spastika'>Узнать детальнее о спастичности и ее причинах</a><br /><a class='simple-link' href='" + rootPath + "/ru/reabilitation'>Узнать детальнее о реабилитации после инсульта</a>";

    var insultEffectsShown = false;
    var insultTherapyShown = false;
    var insultWelcomeShown = false;

    // Spastika
    var spastikaPercent = 'Изменение положения руки это изменение положения руки.';
    var spastikaWelcome = 'Спастичность – это патологическое напряжение мышц, которое вызывает контрактуры - нарушение подвижности в суставе.';
    var spastikaWelcomeElse = 'Спастичность – это патологическое напряжение мышц, которое вызывает контрактуры - нарушение подвижности в суставе.';
    var spastikaHands = "Современные методы терапии и реабилитации после инсульта позволяют уменьшить спастичность, чтобы направить усилия на восстановлении движения. Выбор конкретного вида терапии зависит от вида спастичности у пациента и подбирается индивидуально врачом. ";
    var modernDeseases = "Современные методы терапии и реабилитации после инсульта позволяют уменьшить спастичность, чтобы сконцентрировать усилия на восстановлении двигательной функции. Выбор конкретного вида терапии зависит от вида спастичности у пациента. Более детальная информация приведена в разделе Виды спастичности.";

    var spastikaPercentShown = false;
    var spastikaWelcomeShown = false;
    var spastikaHandsShown = false;
    var modernDeseasesShown = false;

    // Reabilitation
    var reabilitationWelcome = 'В этом разделе собрана краткая информация о современных подходах реабилитации пациентов после инсульта.';
    var reabilitationWelcomeElse = 'В этом разделе собрана краткая информация о современных подходах реабилитации пациентов после инсульта.';

    var reabilitationWelcomeShown = false;

    if (pageName == "insult") {
        var insult_effects_offset = $('#insult-effects').offset().top;
        $('#insult-effects a.btn').click(function() {
            if (!insultEffectsShown) {
                $messages.mCustomScrollbar();
                if (!buttonPressed){
    	    		ga('send', 'event', 'chat_open','view','chat_open');
    	    	}
                $('.chat').show();
                $('#chat_toggle').hide();
                insultEffectsShown = true;
                insertMessage(insultEffects);
            }
            return false;
        });
        /*var insult_therapy_offset = $('#insult-therapy').offset().top;
        $('#insult-therapy a.btn').click(function() {
            if (!insultTherapyShown) {
                $messages.mCustomScrollbar();
                $('.chat').show();
                $('#chat_toggle').hide();
                insultTherapyShown = true;
                insertMessage(insultTherapy);
            }
            return false;
        });*/
    } else if (pageName == "spastika") {
        var hand_normal_offset = $('#hand-position').offset().top - 200;
        $('#hand-position a.btn').click(function() {
            if (!spastikaHandsShown) {
                $messages.mCustomScrollbar();
                if (!buttonPressed){
    	    		ga('send', 'event', 'chat_open','view','chat_open');
    	    	}
                $('.chat').show();
                $('#chat_toggle').hide();
                spastikaHandsShown = true;
                insertMessage(spastikaHands);
            }
            return false;
        });
        /*var life_quality_offset = $('#life-quality').offset().top;
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
        var hand_offset = $('#hand-position').offset().top;*/
    }

    $(document).scroll(function() {
        switch (pageName) {
            case "insult":
                {
                    if (($(this).scrollTop() > insult_effects_offset) && (!insultEffectsShown)) {
                        $messages.mCustomScrollbar();
                        if (!buttonPressed){
            	    		ga('send', 'event', 'chat_open','view','chat_open');
            	    	}
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        insultEffectsShown = true;
                        insertMessage(insultEffects);
                    }
                    /*if (($(this).scrollTop() > insult_therapy_offset) && (!insultTherapyShown)) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        insultTherapyShown = true;
                        insertMessage(insultTherapy);
                    }*/
                }
                /*case "reabilitation":
                    return insultWelcome;*/
            case "spastika":
                {
                    if (($(this).scrollTop() > hand_normal_offset) && (!spastikaHandsShown)) {
                        $messages.mCustomScrollbar();
                        if (!buttonPressed){
            	    		ga('send', 'event', 'chat_open','view','chat_open');
            	    	}
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        spastikaHandsShown = true;
                        insertMessage(spastikaHands);
                    }
                    /*if (($(this).scrollTop() > life_quality_offset) && (!modernDeseasesShown)) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        modernDeseasesShown = true;
                        insertMessage(modernDeseases);
                    }
                    if (($(this).scrollTop() > hand_offset) && (!spastikaPercentShown)) {
                        $messages.mCustomScrollbar();
                        $('.chat').show();
                        $('#chat_toggle').hide();
                        spastikaPercentShown = true;
                        insertMessage(spastikaPercent);
                    }*/
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
		if (!dialogCreated) {
			$('<div class="welcome-message new" style="margin-left: 0px !important; padding-bottom: 0px !important;">Проект SPASTICA – информационный ресурс о реабилитации пациентов, перенесших инсульт. Здесь собрана короткая, полезная информация о инсульте и реабилитации после него.<hr /></div>').appendTo($('.mCSB_container')).addClass('new');
			dialogCreated = true;
		}
		
        $('<div class="message loading new"><figure class="avatar"><img src="' + avatarBase64 + '" /></figure><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();

        setTimeout(function() {
            $('.message.loading').remove();
            $('<div class="message new"><figure class="avatar"><img src="' + avatarBase64 + '" /></figure>' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
            setDate();
            updateScrollbar();
        }, 1000 + (Math.random() * 20) * 100);
    }

    function typeBotMessage(request) {
		if (!dialogCreated) {
			$('<div class="welcome-message new" style="margin-left: 0px !important; padding-bottom: 0px !important;">Проект SPASTICA – информационный ресурс о реабилитации пациентов, перенесших инсульт. Здесь собрана короткая, полезная информация о инсульте и реабилитации после него.<hr /></div>').appendTo($('.mCSB_container')).addClass('new');
			dialogCreated = true;
		}
		
        if ($('.message-input').val() != '') {
            return false;
        }
        $('<div class="message loading new"><figure class="avatar"><img src="' + avatarBase64 + '" /></figure><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();

        setTimeout(function() {
            $('.message.loading').remove();
            $('<div class="message new"><figure class="avatar"><img src="' + avatarBase64 + '" /></figure>' + generateBotMessage(request) + '</div>').appendTo($('.mCSB_container')).addClass('new');
            setDate();
            updateScrollbar();
        }, 1000 + (Math.random() * 20) * 100);

    }

})();