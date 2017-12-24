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

    function insertMessage() {
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

    function generateBotMessage(request) {
        var welcome = 'Меня зовут Камилов Сергей Анварович. Врач невролог, врач ЛФК-реабилитолог.<br /><br /> Как Вас зовут?';
        var sorry = 'Извините, я не совсем Вас понимаю. Напишите пожалуйста ваш вопрос.';
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