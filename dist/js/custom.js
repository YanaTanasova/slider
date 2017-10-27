$(function () {
    
    if ($('.slider__list').length) {

        $('.slider__list').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: '<button class="slider__arr slider__arr--prev"></button>',
            nextArrow: '<button class="slider__arr slider__arr--next"></button>',

            responsive: [
            {
                breakpoint: 1591,
                settings: {
                slidesToShow: 2
                }
            }, {
                breakpoint: 1106,
                settings: {
                slidesToShow: 1
                }
            }, {
            breakpoint: 731,
            settings: {
                slidesToShow: 1,
                centerMode: true
                }
            }, {
            breakpoint: 461,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
                dots: true
                }
            }]
        });

        $('.slick-active').css('opacity', '1');
        
        $('.slider__list').on('afterChange', function(){

            $('.slider__item').css('opacity', '.3');

            if($('.slider__item').hasClass('slick-active')){
                $('.slick-active').css('opacity', '1');
            }
        });
    }

    $('.slider__link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',

        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },

        gallery: {
            enabled: true,
            preload: [0,2],
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
        }
    });
})