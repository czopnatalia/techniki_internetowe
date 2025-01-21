$(document).ready(function () {
    // Funkcja związana z logo
    const logo = document.getElementById("logo");
    if (logo) {
        logo.addEventListener("click", function (event) {
            event.preventDefault(); // Zapobiega domyślnemu działaniu linku
            window.location.href = "strona_glowna.html"; // Przekierowanie na stronę główną
        });
    }
    //Obsługa kliknięcia w linki kategorii w menu
    $('#menu ul li a').on('click', function (event) {
        const href = $(this).attr('href');
        if (href.includes("category")) {
            event.preventDefault(); // Zapobiega domyślnemu działaniu linku
            const category = href.split("category=")[1]; // Wyodrębnij kategorię z URL
            console.log("Przekierowanie na kategorię:", category); // Debugowanie
            window.location.href = `strona_filtrowania.html?category=${encodeURIComponent(category)}`; // Przekieruj na stronę filtrowania
        }
    });

    


    // Obsługa newslettera
    const newsletterSubmit = document.getElementById("newsletter-submit");
    if (newsletterSubmit) {
        newsletterSubmit.addEventListener("click", function () {
            const emailInput = document.getElementById("newsletter-email");
            if (!emailInput || emailInput.value.trim() === "") {
                alert("Proszę podać adres e-mail.");
                return;
            }

            // Usunięcie formularza po zapisie
            const newsletterSection = document.querySelector(".newsletter");
            if (newsletterSection) {
                newsletterSection.innerHTML = "<p>Dziękujemy za zapisanie się do naszego newslettera!</p>";
            }
        });
    }

        
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


document.addEventListener("DOMContentLoaded", function () {
    const scrollLink = document.querySelector("#scroll-link");

    if (scrollLink) {
        scrollLink.addEventListener("click", function (event) {
            event.preventDefault(); // Zapobiega domyślnemu zachowaniu linku
            const targetSection = document.querySelector("#popular-recipes");
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth" // Płynne przewijanie
                });
            }
        });
    }
});