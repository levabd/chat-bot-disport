(function() {

    jsSocials.shares.odnoklasssniki = {
        label: "Класс",
        logo: "fa fa-odnoklassniki",
        shareUrl: "http://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl={url}&st.comments={text}",
        countUrl: "http://www.ok.ru/dk?st.cmd=extOneClickLike&uid=odklocs0&ref={url}",
        getCount: function(data) {
            return data.count;
        }
    };

    $("#share").jsSocials({
        shares: ["facebook", "twitter"],
        text: "Реабилитация после инсульта возможна",
        showLabel: false,
        showCount: false,
        shareIn: "popup"
    });

    $(window).scroll(function() {
        var newOffset = 855 - $(window).scrollTop() > 100 ? 855 - $(window).scrollTop() : 100;
        $("#share").stop().animate({
            top: newOffset + "px"
        });
    });

})();