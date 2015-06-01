jQuery(document).ready(function() {
    // Owl Anahein News
    var owl = jQuery("#ana-news");
    owl.owlCarousel({
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    // Menu Toggle
    jQuery( "#menu-icon" ).click(function() {
        if (jQuery('#menu-icon').hasClass('menu-normal')) {
            jQuery( ".menu-display" ).show("slow");
            jQuery("#menu-icon").addClass('menu-active');
            jQuery("#menu-icon").removeClass('menu-normal');
        } else {
            jQuery( ".menu-display" ).hide( "slow");
            jQuery("#menu-icon").removeClass('menu-active');
            jQuery("#menu-icon").addClass('menu-normal');
        }
    });
    // Parallax
    jQuery.stellar({
        horizontalScrolling: false,
        scrollProperty: 'scroll',
        positionProperty: 'position'
    });
    // Clients
    var owl = jQuery("#owl-clients");
    owl.owlCarousel({
        items : 2, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
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
});
// WOW
wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100
    }
);
wow.init();
// Home Carousel
jQuery('#home-carousel').carousel({
    interval: 50000
});
// Anaheim News Slider
jQuery('#ana-slides').carousel({
    interval: 50000
});
// Team Slides
jQuery('#team-slides').carousel({
    interval: 50000
});
// Portfolio Slides
jQuery('#portfolio-slides').carousel({
    interval: 50000
});
// Google Map
jQuery('#map').gmap3({
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
jQuery(window).load(function(){
    // Creative Blogs Grid Masonry
    var jQuerycontainer = jQuery('#cbg-masonry');
    jQuerycontainer.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 1
        }
    });
    // Portfolio Items
    var jQuerycontainer = jQuery('#portfolio-items');
    jQuerycontainer.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        },
        layoutMode: 'fitRows'
    });
    jQuery('.portfolioFilter a').click(function(){
        jQuery('.portfolioFilter .current').removeClass('current');
        jQuery(this).addClass('current');

        var selector = jQuery(this).attr('data-filter');
        jQuerycontainer.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});
/********************** Pretty Photo.
 Used: - For Grouping:  <a data-rel="prettyPhoto[portfolio-group]">
 - For Single Image: <a data-rel="prettyPhoto">
 */
jQuery('a[data-rel]').each(function() {
    jQuery(this).attr('rel', jQuery(this).data('rel'));
});
jQuery("a[rel^='prettyPhoto']").prettyPhoto({
    theme:'light_square',
    allow_resize: true, /* Resize the photos bigger than viewport. true/false */
    default_width: 500,
    default_height: 344
});
//smooth scroll to top
jQuery('#topo').on('click', function(event){
    event.preventDefault();
    jQuery('body,html').animate({
            scrollTop: 0
        }
    );
});