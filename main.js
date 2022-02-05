console.log(2151);
$('.header-slider').slick({
    dots: true,
    prevArrow: '<button type=button" class="slick-prev"><img src="images/arrow-top.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-bot.svg"></button> ',
    vertical: true,
    responsive: [{
        breakpoint: 385,
        settings: {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        }
    }]
});

$('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product__content',
    focusOnSelect: true,
    vertical: true,
    prevArrow: '<button type=button" class="product-prev"><img src="images/arrow-top1.png"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/arrow-bot1.png"></button> ',
    responsive: [{
        breakpoint: 890,
        settings: {
            vertical: false,
            dots: false,
            slidesToShow: 3,
            arrows: false,


        },
        breakpoint: 500,
        settings: {
            vertical: false,
            slidesToShow: 1,
            arrows: false,
            // centerMode: true,
            dots: true,
        }

    }]
});
$('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false
});

$('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
});