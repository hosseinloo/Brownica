$(document).ready(init);

$(window).on("load", function() {
    if ($("#loader").length) {
        $("#loader")
            .delay(1000)
            .fadeOut("slow", function() {
                $(this).remove();
            });
    }
});

function init() {
    // Declaration
    let burgerMenu;
    // Scroll Animation Header
    $(window).scroll(function() {
        var pos = $(this).scrollTop();
        if (pos > 70) {
            $("header").fadeIn(2000);
            $("header").addClass("header-style");
        } else {
            $("header").removeClass("header-style");
        }
    });
    var hero = document.getElementById("hero");
    $("#hero").slideDown(800);
    if (hero.style.display === "block") {
        hero.classList.add("anim");
    }

    burgerMenu = false;

    $(".nav-icon").click(function() {
        if (!burgerMenu) {
            $(".nav-icon").children().removeClass("icofont-navigation-menu");
            $(this).children().addClass("icofont-close");
            $("nav").find(".navigator").slideDown(800);

            burgerMenu = true;
        } else {
            $(this).children().removeClass("icofont-close");
            $(this).children().addClass("icofont-navigation-menu");
            $("nav").find(".navigator").slideUp(800);

            burgerMenu = false;
        }
    });

    // Carousel Testimonials
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            },
        },
    });

    // Counter
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });

    // Aos animation

    function aosInit() {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: false,
        });
    }
    aosInit();
    // Portfolio Hover
    var portfolio = $(".portfolio-container").isotope({
        itemSelector: ".filter",
        layoutMode: "fitRows",
    });
    $("#portfolioFilter li").on("click", function() {
        $("#portfolioFilter li").removeClass("filter-active");
        $(this).addClass("filter-active");
        portfolio.isotope({
            filter: $(this).data("filter"),
        });
    });
}