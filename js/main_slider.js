$(document).ready(function(){
    $('#aside__shop').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay : true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
            "<i class='bx bx-first-page'></i>",
            "<i class='bx bx-last-page' ></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            468 : {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
    
            1468: {
                items: 5,
                nav: false
            }
        }
    });

    $('#aside__used').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay : true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
            "<i class='bx bx-first-page'></i>",
            "<i class='bx bx-last-page' ></i>"
        ],
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            468 : {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
    
            1468: {
                items: 5,
                nav: false
            }
        }
    });
});
