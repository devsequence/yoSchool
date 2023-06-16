AOS.init({disable: 'mobile'});
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header').toggleClass('active');
});
$('.courses-item').each(function (e) {
    var $ths = $(this);
    var $thsText = $ths.find('.courses-item__text').text();
    var dots = "...";
    var limit = 290;
    if($thsText.length > limit){
        var string = '';
        string = $thsText.substring(0,limit) +dots;
        $ths.find('.courses-item__text').text(string);
        $ths.find('.btn-secondary').on('click', function (e) {
            e.preventDefault();
            var $ths = $(this);
            var $thsParents = $ths.parents('.courses-item');
            var $thsParentsTop = $thsParents.offset().top;
            $ths.find('span').toggleClass('hidden');
            $thsParents.toggleClass('active');
            $('html, body').animate({
                scrollTop: $thsParentsTop
            }, 300);
            if($thsParents.hasClass('active')){
                $thsParents.find('.courses-item__text').text($thsText);
            }else {
                $thsParents.find('.courses-item__text').text(string);
            }
            return false;
        });
    }else{
        $ths.find('.btn-secondary').on('click', function (e) {
            e.preventDefault();
            var $ths = $(this);
            var $thsParents = $ths.parents('.courses-item');
            var $thsParentsTop = $thsParents.offset().top;
            $ths.find('span').toggleClass('hidden');
            $thsParents.toggleClass('active');
            $('html, body').animate({
                scrollTop: $thsParentsTop
            }, 300);
            return false;
        });
    }

});
$(".more-slider").slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.more-slider-prev'),
    nextArrow: $('.more-slider-next')
});
if($('.thank').length > 0){
    $('.header, .footer').css('display', 'none');
}
if($('.hero').length > 0){
    $('.header-logo a, .footer-logo a, .to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $(window).on('scroll', function() {
        var $this = $(this),
            $header = $('.header');
        if ($this.scrollTop() > 1) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    });
    $(window).on('scroll', function() {
        var $this = $(this);
        if ($this.scrollTop() > 700) {
            $('.to-top').addClass('active');
        }
        else{
            $('.to-top').removeClass('active');
        }
    });
    $('.header-nav a, .footer-nav a, .btn-hero').on('click', function (e) {
        e.preventDefault();
        var ths = $(this);
        var thsId = ths.data('id');
        var headerHeight = $('.header').height();
        if ($(ths).data('id')) {
            $('html, body').animate({
                scrollTop: $('#'+thsId).offset().top - 120
            }, 1000);
            $('.header, .header-btn').removeClass('active');
            return false;
        }else{
        }
    });
}else{
}
$(document).mouseup(function (e){
    var div = $('.modal-group__desc, .modal-group__title');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('active');
    }
});
// $(window).on('mousemove', function(e) {
//     var w = $(window).width();
//     var h = $(window).height();
//     var offsetX = 0.5 - e.pageX / w;
//     var offsetY = 0.5 - e.pageY / h;
//
//     $(".section-parallax img").each(function(i, el) {
//         var offset = parseInt($(el).data('offset'));
//         // var offset = 10;
//         var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";
//         $(el).css({
//             '-webkit-transform': translate,
//             'transform': translate,
//             'moz-transform': translate
//         });
//     });
// });

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 600,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


function countNumbers(){
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
            {
                duration: 1500,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });

    });
}
$(window).on('scroll', function() {
    var $this = $(this);
    if ($this.scrollTop() > 1000) {
        countNumbers();
    }
    function scrollAnimate(){
        var st = $(this).scrollTop();
        $('.section-parallax img').each(function (e) {
            // var offset = $(this).offset().top - 50;
            var offset = $(this).data('offset');
            var translate = "translate3d(0px,-"+ Math.round((st - offset) / 5 ) + "px, 0px)";
            $(this).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
        });
    }
    scrollAnimate();
});


// $(document).mouseup(function (e){
//     var div = $('.popup');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         div.removeClass('active');
//         $('.header-nav a, .footer-nav a').removeClass('active');
//     }
// });


$aboutMedia = false;
$teamMedia = false;
function aboutMedia(){
    if($(window).width() < 1230){
        if(!$aboutMedia){
            $(".about-slider").slick({
                speed: 300,
                prevArrow: $('.about-slider-prev'),
                nextArrow: $('.about-slider-next'),
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 1230,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                        }
                    },
                ]
            });
            $aboutMedia = true;
        }
    } else if($(window).width() > 992){
        if($aboutMedia){
            $('.about-slider').slick('unslick');
            $aboutMedia = false;
        }
    }
}
function teamMedia(){
    if($(window).width() < 1230){
        $('.team-item').on('click', function (e) {
           var $ths = $(this);
           var thsText = $ths.find('.team-item__desc').html();
            $('body').addClass('scroll');
           $('.popup-info').addClass('active').find('.popup-text').html(thsText);
        });
        $('.work-item__media span').on('click', function (e) {
           var $ths = $(this);
           var thsText = $ths.next().html();
            $('body').addClass('scroll');
           $('.popup-info').addClass('active').find('.popup-text').html(thsText);
        });
        if(!$teamMedia){
            $('.team-slider').slick({
                speed: 300,
                infinite: false,
                dots: true,
                prevArrow: $('.team-slider-prev'),
                nextArrow: $('.team-slider-next'),
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 1230,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 620,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
                //     {
                //         breakpoint: 600,
                //         settings: {
                //             slidesToShow: 2,
                //             slidesToScroll: 2
                //         }
                //     },
                //     {
                //         breakpoint: 480,
                //         settings: {
                //             slidesToShow: 1,
                //             slidesToScroll: 1
                //         }
                //     }
                //     // You can unslick at a given breakpoint now by adding:
                //     // settings: "unslick"
                //     // instead of a settings object
                // ]
            });
            $teamMedia = true;
        }
    } else if($(window).width() > 992){
        if($teamMedia){
            $('.team-slider').slick('unslick');
            $teamMedia = false;
        }
    }
}
$(document).ready(function(){
    aboutMedia();
    teamMedia();
});
$(window).on('resize', function(){
    aboutMedia();
    teamMedia();
});
$('.result-slider').slick({
    speed: 300,
    infinite: false,
    prevArrow: $('.result-slider-prev'),
    nextArrow: $('.result-slider-next'),
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.contact-slider .slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.contact-slider-prev'),
    nextArrow: $('.contact-slider-next'),
});
$("input[type='tel']").mask("+38(999) 99-99-999");
function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-team__item-link').on('click', function (e) {
    e.preventDefault();
});
$('.modal-group__title').on('click', function (e) {
    e.preventDefault();
    $('.modal-group__desc').toggleClass('active');
});
