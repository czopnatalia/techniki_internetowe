$(document).ready(function() {
    $('#menu ul li').hover(
        function() {
            $(this).css({
                'color': '#865439'
            });
            $(this).children("ul").slideDown('fast');
        },
        function() {
            $(this).css({
                'color': ''
            });
            $(this).children("ul").slideUp('fast');
        }
    );
});