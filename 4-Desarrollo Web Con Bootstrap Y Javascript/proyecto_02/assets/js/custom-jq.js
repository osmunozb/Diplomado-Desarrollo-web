$(function () {

    // Modo claro
    $('#claro').click(function (){
        //  header
        $('#navx').removeClass('bg-black');
        $('#navx').addClass('bg-primary');

        //  main
        $('main').removeClass('bg-dark');
        $('main').addClass('bg-white');

        $('#features').removeClass('bg-black');
        $('#features').addClass('bg-secondary');

        $('#carruselDos').addClass('carousel-dark');
        $('#carruselTres').addClass('carousel-dark');

        $('main').removeClass('text-white');
        $('main').addClass('text-black');

        $('#envi').removeClass('text-white');
        $('#envi').addClass('text-black');


        //  footer
        $('footer').removeClass('bg-black');
        $('footer').addClass('bg-primary');

        $('#theme').removeClass('text-primary');
        $('#theme').addClass('text-dark');

        $('#theme-sm').removeClass('text-primary');
        $('#theme-sm').addClass('text-dark');

        $('#marca').removeClass('text-primary');
        $('#marca').addClass('text-dark');
    });

    // Modo oscuro
    $('#oscuro').click(function (){
        //  header
        $('#navx').removeClass('bg-primary');
        $('#navx').addClass('bg-black');

        //  main
        $('main').removeClass('bg-white');
        $('main').addClass('bg-dark');

        $('#features').removeClass('bg-secondary');
        $('#features').addClass('bg-black');

        $('#carruselDos').removeClass('carousel-dark');
        $('#carruselTres').removeClass('carousel-dark');

        
        $('main').removeClass('text-black');
        $('main').addClass('text-white');

        $('#envi').removeClass('text-black');
        $('#envi').addClass('text-white');


        //  footer
        $('footer').removeClass('bg-primary');
        $('footer').addClass('bg-black');

        $('#theme').removeClass('text-dark');
        $('#theme').addClass('text-primary');

        $('#theme-sm').removeClass('text-dark');
        $('#theme-sm').addClass('text-primary');

        $('#marca').removeClass('text-dark');
        $('#marca').addClass('text-primary');
    });



    // Venobox galería
    $('.venobox').venobox({
        //Ajustes
        arrowsColor: '#0eb493'
    });


})//Fin 