$(document).ready(function () {
    // Toggle menu po kliknięciu przycisku ☰
    $('.menu-toggle').click(function () {
        $('#menu').toggleClass('active');
    });

    // Toggle submenu po kliknięciu na menu główne
    $('.menu-item').click(function (event) {
        // Zapobieganie domyślnemu działaniu linku
        event.stopPropagation();
        
        // Toggle submenu tylko dla tego elementu
        $(this).toggleClass('active');
        
        // Ukryj inne sub-menu
        $(this).siblings().removeClass('active');
    });
});