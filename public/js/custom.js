jQuery(document).ready(function() {

    // Parallax
    jQuery.stellar({
        horizontalScrolling: false,
        scrollProperty: "scroll",
        positionProperty: "position"
    });

    // General Single Slide Carousel
    var owl = jQuery("#general-single");
    owl.owlCarousel({
        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 1],
            [1000, 1],
            [1200, 1],
            [1400, 1],
            [1600, 1]
        ],
        navigation : false

    });

    // WOW
    wow = new WOW({animateClass: "animated", offset: 100});
    wow.init();

    // Google Map
    jQuery("#map").gmap3({
        marker:{
            latLng: [40.73009, -73.78085],
            options:{
                icon: "images/ui-elements/map-marker.png"
            }
        },
        map:{
            options:{
                zoom: 12,
                scrollwheel: false
            }
        }
    });

    // Grid Masonry
    jQuery(window).load(function(){
        var jQuerycontainer = jQuery("#cbg-masonry");
        jQuerycontainer.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            },
            layoutMode: "masonry",
            masonry: {
                columnWidth: 1
            }
        });
    });

    // Smooth scroll to top
    jQuery("#topo").on("click", function(event){
        event.preventDefault();
        jQuery("body,html").animate({
                scrollTop: 0
            }
        );
    });

});