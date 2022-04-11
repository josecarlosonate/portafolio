/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // al cargar la pagina 
    // $(document).load(
    //     tabs()
    // );
    $(document).ready(url())

    function url(){
        
        let btn = $('.btnInicio').attr('href');

        console.log(btn);
        $('#awards').click();
    }
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // agregar icono en sidebar 
    $('ul.navbar-nav li.nav-item a').on('click', tabs);
    function tabs(){   
        $('ul.navbar-nav li.nav-item a').css({
            color: '#94D3A2',
        });     
        $('ul.navbar-nav li.nav-item a').removeClass('activo');
        $(this).addClass('activo');
        $(this).css({
            color: '#28A745',
        });
        // let enlace = $(this).attr('href');        
    }



})(jQuery); // End of use strict
