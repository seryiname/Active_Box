$(function() {

    /* Fixed Header*/ 

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
       

    $(window).on("scroll load resize", function() {
        let introH = intro.innerHeight();
        
        scrollPos = $(this).scrollTop();

        if ( scrollPos > introH ) {
            header.addClass ("fixed");
    
        } else {
            header.removeClass ("fixed");
        } 
    
    });


    /* Smooth Scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({

            scrollTop: elementOffset - 65
        }, 700)
    });

    /* Nav Toggle */ 
    navToggle.on("click", function(event) {
        event.preventDefault();
    
        nav.toggleClass("show");

    });

    /* Testimonials: https://kenwheeler.github.io/slick/   (for Slider)*/ 

    let slider = $("#testimonialsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
      });

});