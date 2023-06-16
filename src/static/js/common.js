AOS.init({disable: 'mobile'});
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header').toggleClass('active');
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
}$(window).on('scroll', function() {
    var $this = $(this);
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

