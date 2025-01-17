$(document).ready(function () {
    // Funkcja dla dużych ekranów (>1260px) - hover
    if ($(window).width() > 1260) {
        $('#menu ul li').hover(
            function () {
                $(this).css({
                    'color': '#865439',
                });
                $(this).children('ul').stop(true, true).slideDown('fast');
            },
            function () {
                $(this).css({
                    'color': '',
                });
                $(this).children('ul').stop(true, true).slideUp('fast');
            }
        );
    }

    // Funkcja dla małych ekranów (<1260px) - kliknięcie
    if ($(window).width() < 1260) {
        $('#menu ul li').on('click', function (event) {
            event.stopPropagation(); // Zapobiega propagacji kliknięcia
            var submenu = $(this).children('ul');

            // Sprawdzamy, czy submenu jest widoczne
            if (submenu.is(':visible')) {
                submenu.stop(true, true).slideUp('fast'); // Jeśli widoczne, zwijamy
            } else {
                submenu.stop(true, true).slideDown('fast'); // Jeśli niewidoczne, rozwijamy
                $(this).siblings().children('ul').stop(true, true).slideUp('fast'); // Zwijamy inne submenu
            }
        });

        // Ukryj wszystkie submenu po kliknięciu poza menu
        $(document).on('click', function (event) {
            if (!$(event.target).closest('#menu').length) {
                $('#menu ul li').children('ul').stop(true, true).slideUp('fast');
            }
        });
    }

    // Obsługa zmiany rozmiaru okna
    $(window).resize(function () {
        if ($(window).width() > 1260) {
            $('#menu ul li').off('click').hover(
                function () {
                    $(this).css({
                        'color': '#865439',
                    });
                    $(this).children('ul').stop(true, true).slideDown('fast');
                },
                function () {
                    $(this).css({
                        'color': '',
                    });
                    $(this).children('ul').stop(true, true).slideUp('fast');
                }
            );
        } else {
            $('#menu ul li').off('mouseenter mouseleave').on('click', function (event) {
                event.stopPropagation(); // Zapobiega propagacji kliknięcia
                var submenu = $(this).children('ul');

                if (submenu.is(':visible')) {
                    submenu.stop(true, true).slideUp('fast'); // Jeśli widoczne, zwijamy
                } else {
                    submenu.stop(true, true).slideDown('fast'); // Jeśli niewidoczne, rozwijamy
                    $(this).siblings().children('ul').stop(true, true).slideUp('fast'); // Zwijamy inne submenu
                }
            });
        }
    });
});
