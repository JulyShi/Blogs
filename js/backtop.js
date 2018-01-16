$(document).ready(function() {

    // hide #back-top first
    $("#back-top").css('opacity','0');

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $("#back-top").css('opacity', '1');
                $('#back-top').css('bottom','30px');
            } else {
                $('#back-top').css('bottom', '9999px');
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
