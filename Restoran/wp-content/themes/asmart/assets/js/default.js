// ---------------------------------------------------------
// !!!!!!!!!!!!!!!!!document ready!!!!!!!!!!!!!!!!!!!!!!!!!!
// ---------------------------------------------------------

jQuery(document).ready(function () {
    "use strict";

    atmSlider();
    fixwidthSlider();
    homeFullpageSlider();
    menuToggle();
    ymaps();
    sliderMenu();
    maskFields();
    clickAboutPage();
    changeUrlAboutPage();
    clickSingleNews();
    footerBottom();
    modalContactPage();
    closeModalSuccess();
    lightxBox();
    changeLangByClick();
// end redy function
});
jQuery(window).load(function() {

    homeSlider();
    preloader();
    showVideoBlock();

});
// jQuery(window).resize(function() {
//     homeFullpageSlider();
//
// });

//------------------------
// Show video  block in home page afeter load
//----------------------------------
function showVideoBlock(){

    let main_class = '.video-wrapper';
    if(jQuery(main_class).length  ){
        jQuery(main_class).addClass('show-video-block');
    }

}




//------------------------
// Preloader
//----------------------------------
function preloader(){
    "use strict";
    let main_class = '#preloader';
    if(jQuery(main_class).length  ){

        if(!jQuery('#hola').hasClass('addtransition')) {
            jQuery('#preloader').velocity({
                opacity: 0.1,
            }, {
                duration: 400,
                complete: function () {
                    jQuery('#hola').velocity({
                        translateY: "-100%"
                    }, {
                        duration: 1000,
                        easing: [0.7, 0, 0.3, 1],
                        complete: function () {
                            jQuery('body').addClass('animate-done');
                            showNewsBlokcs();

                        }
                    })
                }
            });
        }else{
            showNewsBlokcs();
        }

        // jQuery('.close-preloader').click(function(e) {
        //     e.preventDefault();
        //     jQuery('#hola').velocity({
        //         translateY : "-100%"
        //     }, {
        //         duration: 1000,
        //         easing: [0.7,0,0.3,1],
        //         complete: function(){
        //             jQuery('body').addClass('animate-done');
        //         }
        //     })
        // });

    }

}
function showNewsBlokcs(){
    "use strict";
    setTimeout(function () {

        jQuery('.content-slider .first-block').addClass('fadeInUp animated');


    }, 7000);
    setTimeout(function () {

        jQuery('.content-slider .second-block').addClass('fadeInUp animated');

    }, 7600);
}

//------------------------
// Home full page slider
//----------------------------------
function homeFullpageSlider(){
    "use strict";
    let main_class = '#pagepiling';
    if(jQuery(main_class).length){
    if(jQuery(window).width() > 1024){
        // jQuery(main_class).detach();
        jQuery(main_class).pagepiling({
            sectionsColor: ['#333333', '#2ebe21', '#2C3E50', '#51bec4'],
            navigation: {
                'position': 'right',
                'tooltips': ['Слайд 1', 'Слайд 2', 'Слайд 3' ]
            },
            onLeave: function(index, nextIndex){

                if(nextIndex == 3  || nextIndex == 4 ){
                  jQuery('body').removeClass('white').addClass('black');
                }else{
                    jQuery('body').removeClass('black').addClass('white');
                }


            }
        });
    }
    }

}
//------------------------
// Home    slider
//----------------------------------
function homeSlider(){
    "use strict";
    let main_class = '.home-slider';
    if(jQuery(main_class).length){
        jQuery(main_class).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            dots: false,
            //  autoplay: true,
             prevArrow: jQuery('.home-slider-walp .arr-slider .prev'),
             nextArrow: jQuery('.home-slider-walp .arr-slider .next')

        });

    }

}

//------------------------
//  Menu toggle  and click menu
//----------------------------------
function menuToggle(){
    "use strict";

    jQuery('#menu-item-15 a  , #menu-item-271 a').click(function(e) {
            e.preventDefault();
            if(jQuery(this).parent().parent().is('.sub-menu')){
                window.open(jQuery(this).attr('href'), '_blank');
            }


        jQuery(this).next().stop().slideToggle();
    }).next().stop().hide();
        // open menu
    jQuery('.menu-link, .menu-overlay').click(function(e) {
        e.preventDefault();

        jQuery('.menu-bar, .menu-overlay, .switcher-lang, .menu-link').toggleClass('active');
        jQuery('header').toggleClass('active-menu');

    });

}

//------------------------
//  Fix wdith slider
//----------------------------------
function fixwidthSlider(){
    "use strict";
    let $width = jQuery(window).width();
   if( $width < 1369){

       jQuery('.home-slider').css('width',$width);

   }

}

//------------------------
//  Maps
//----------------------------------
function ymaps(){
    "use strict";
    let $map = jQuery('#map');


   if($map.length){
       google.maps.event.addDomListener(window, 'load', init);

       function init() {
           // Basic options for a simple Google Map
           // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
           var mapOptions = {
               // How zoomed in you want the map to start at (always required)
               zoom: 17,

               // The latitude and longitude to center the map (always required)
               center: new google.maps.LatLng(54.968446, 73.382010), // New York

               // How you would like to style the map.
               // This is where you would paste any style found on Snazzy Maps.
               styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
           };

           // Get the HTML DOM element that will contain your map
           // We are using a div with id="map" seen below in the <body>
           var mapElement = document.getElementById('map');

           // Create the Google Map using our element and options defined above
           var map = new google.maps.Map(mapElement, mapOptions);
           var image = {
               url: 'http://batler-bar.ru/wp-content/themes/asmart/assets/images/marker2.png',
               size: new google.maps.Size(79, 108),
               // The origin for this image is (0, 0).
               origin: new google.maps.Point(0, 0),
               // The anchor for this image is the base of the flagpole at (0, 32).
               anchor: new google.maps.Point(39, 108)
           };
           // Let's also add a marker while we're at it
           var marker = new google.maps.Marker({
               position: new google.maps.LatLng(54.968446, 73.382010),
               map: map,
               icon: image,
               title: 'Батлер'
           });
       }

   }

}

//------------------------
// Atmosfer    slider
//----------------------------------
function atmSlider(){
    "use strict";

    let main_class = '.slider-atm';
    if(jQuery(main_class).length){
        jQuery(main_class).slick({
            infinite: true,
            slidesToShow: 1,
            lazyLoad: 'ondemand',
            slidesToScroll: 1,
            speed: 700,
            dots: false,
            //  autoplay: true,
            prevArrow: jQuery('.atm-controllers .prev'),
            nextArrow: jQuery('.atm-controllers .next')

        });
        jQuery('.controll.center ').click(function(e) {
            e.preventDefault();
            jQuery(main_class).slick('slickGoTo', 0);
        });

    }

}
//------------------------
// Menu    slider
//----------------------------------
function sliderMenu(){
    "use strict";

    let main_class = '.slider-menu';
    if(jQuery(main_class).length){
        jQuery(main_class).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            dots: true,
            //  autoplay: true,
            prevArrow: jQuery('.arrow-menu .prev'),
            nextArrow: jQuery('.arrow-menu .next')

        });


    }

}
//------------------------
// Input telephone mask
//----------------------------------




function maskFields(){
    "use strict";

    let phone_class = '.phone-field';
    let time_class = '.time-field';
    let date_class = '.date-field';
    if(jQuery(phone_class).length){
        jQuery(phone_class).inputmask({"mask": "+7 (999) 999-9999"});

    }


    //  in mobile work native UI
    if(jQuery(window).width() > 1024 ){
        if(jQuery(time_class).length){
            jQuery(time_class).datepicker({
                dateFormat: ' ',
                timepicker: true,
                classes: 'only-timepicker',
                autoClose: true
            });

        }

        if(jQuery(date_class).length){
            jQuery(date_class).datepicker({
                dateFormat: 'dd.mm.yyyy',
                timepicker: false,
                autoClose: true
            });

        }

    }else{
        jQuery('input').removeAttr('placeholder');
        jQuery(time_class).attr('type', 'time');
        jQuery(date_class).attr('type', 'date');

    }

}
//------------------------
// Click About page
//----------------------------------

function clickAboutPage() {
    "use strict";

    var main_class  = '.item-tab' ;
    var LayoutClass = '.page-template-page-about' ;
    var AboutClass  = '.list .about' ;
    var ChiefClass  = '.list .chief' ;
    var ImgBg       = '.booking-img' ;
    var redyUrl;


    if(jQuery(LayoutClass).length) {
        jQuery(main_class).click(function (e) {
            var $this = jQuery(this);
            jQuery(main_class).removeClass('active');
            jQuery($this).addClass('active');

            if (jQuery($this).hasClass('shef')) {
                jQuery(AboutClass).slideUp();
                jQuery(ChiefClass).slideDown();
                redyUrl =   jQuery(ChiefClass).attr('data-url');

            } else {
                jQuery(AboutClass).slideDown();
                jQuery(ChiefClass).slideUp();
                redyUrl =   jQuery(AboutClass).attr('data-url');
            }

            // change bg
            jQuery(ImgBg).fadeOut();
            setTimeout(function(){
                jQuery(ImgBg).css("background-image",'url(' + redyUrl + ')' );
            }, 400);

            setTimeout(function(){
                jQuery(ImgBg).fadeIn();
            }, 400);

            return false;
        });


    }

}

//------------------------
// Change Url About page
//----------------------------------

function changeUrlAboutPage() {
    "use strict";

    var main_class = '.item-tab' ;

    jQuery(main_class).click(function(e) {

        var $this = jQuery(this);
        // clear state

        var stateUrl = jQuery($this).data('url');

        var redyurl = jQuery.query.SET('type', stateUrl).toString();

        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + redyurl;
        window.history.pushState({path: newurl}, '', newurl);
    });



}


//------------------------
// Single page news arrow
//----------------------------------

function clickSingleNews() {
    "use strict";

    var main_class = '.nav-page.single a';

    jQuery(main_class).click(function(e) {
        e.preventDefault();
        var $this = jQuery(this);

        if($this.hasClass('prev')){
            var redylink = jQuery('.time-line').find('.active').parent().prev().find('a').attr('href');

        }else{
            var redylink = jQuery('.time-line').find('.active').parent().next().find('a').attr('href');
        }
        if(redylink.length){
            window.location.href = redylink;
        }

    });



}


//----------------------------------
//   footer attach bottom  for news , about
//------------------------------------
function footerBottom(){
    "use strict";
    let NewsClass = '.single-post';
    let AboutClass = '.page-template-page-about';
    let AtmosferaClass = '.page-template-page-atmosfera';
    let ArchievClass = '.page-template-page-archive-news';
    let classContent = '.site-content';
    let footerHeight = jQuery('footer').height();
    let headerHeight = jQuery('header').height();
    let contentHeight = jQuery(classContent).height();

    if(jQuery(NewsClass).length  ||   jQuery(AboutClass).length   ||   jQuery(AtmosferaClass).length ||   jQuery(ArchievClass).length ){
            console.log( contentHeight+ headerHeight + footerHeight);
            console.log( jQuery(window).height());

      //  if( contentHeight+ headerHeight + footerHeight  < jQuery(window).height()   ||   jQuery(AboutClass).length ){
            jQuery(classContent).css('min-height', (
                jQuery(window).height()
                - headerHeight
                - footerHeight
                + 147
            ));
       // }
    }

}


//----------------------------------
//  Modal Contact page
//------------------------------------
function modalContactPage(){
    "use strict";



    let ContactClass    = '.page-template-page-contacts';
    let LinkClass       = '.link.feedback';
    let ModalClass       = '.custom-modal';
    let LayerClass       = '.menu-overlay ';

    if(jQuery(ContactClass).length  ){
        // open
        jQuery(LinkClass).click(function(e) {
            e.preventDefault();

            jQuery(ModalClass).fadeIn();
            jQuery(LayerClass).addClass('active');

        });

        // close

        jQuery(ModalClass + ' i ' ).click(function(e) {
            e.preventDefault();

            jQuery(ModalClass).fadeOut();
            jQuery(LayerClass).removeClass('active');

        });

    }

}

//----------------------------------
//  Modal Contact page
//------------------------------------
function closeModalSuccess(){
    "use strict";

        let LayerClass       = '.menu-overlay ';

        jQuery('.close-modal').click(function(e) {
            e.preventDefault();

            jQuery('.success-modal').fadeOut();
            jQuery('.custom-modal').fadeOut();
            jQuery(LayerClass).removeClass('active');

        });

}

//----------------------------------
//  Lightbox
//------------------------------------
function lightxBox(){
    "use strict";
    let galleryClass = '.slider-atm';
    if(jQuery(galleryClass).length  ) {

        jQuery(galleryClass).lightGallery({
            download: false,
            selector: '.item a',
            thumbnail: false,
            zoom: true,
        });
    }

}
//----------------------------------
//  Change lang by click
//------------------------------------
function changeLangByClick(){
    "use strict";
    var linkClass = '.switcher-lang a';

    jQuery('body').on('click', linkClass,function(){
        jQuery(linkClass).removeClass('active');
        jQuery(this).addClass('active');
        console.log(jQuery(this).attr('data-type'));
        if(jQuery(this).attr('data-type') == 'en'){
            var redylink = window.location.protocol + "//" + window.location.host + '/en';
            //var redylink = window.location.protocol + "//" + window.location.host + '/en' + window.location.pathname;

        }else{
            var redylink = window.location.protocol + "//" + window.location.host;

        }

        window.location.href = redylink;
        return false;
    });
}



//----------------------------------
// add modal success
//------------------------------------
document.addEventListener('wpcf7mailsent', function(event) {
    let successModal    = jQuery('.success-modal');
    let customModal     = jQuery('.custom-modal');
    let menuOverlay     = jQuery('.menu-overlay');
    let reserveText     = jQuery('.reserve-text');
    let mainText        = jQuery('.main-text');
    if (event.detail.contactFormId == "76" || event.detail.contactFormId == "283") {

        reserveText.addClass('show-text');

    }else{
        mainText.addClass('show-text');
        customModal.fadeOut();
    }
    successModal.fadeIn();
    menuOverlay.addClass('active');

    setTimeout(function(){

        successModal.fadeOut();

        menuOverlay.removeClass('active');
    },4000);
    // remove class  for text
    setTimeout(function(){


        reserveText.removeClass('show-text');
        mainText.removeClass('show-text');
    },4500);


}, false);

//
// Close preload by click
//

document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.close-preloader')) return;

    // Don't follow the link
    event.preventDefault();

    var hola = document.getElementById("hola");
    var preloader = document.getElementById("preloader");

    preloader.style.opacity = "0.2";
    hola.classList.add("addtransition");
    setTimeout(function(){
        hola.classList.add("hide-preloader");
    }, 200);


}, false);