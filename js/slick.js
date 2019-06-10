$('.nomination').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4.65,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3.65,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 2.65,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2.65,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows:false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows:false
            }
        }
    ],
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" fill="##000000" viewBox="0 0 14 24"><path d="M.6 10.8L11 .5c.7-.7 1.7-.7 2.4 0s.7 1.7 0 2.4L4.2 12l9.1 9.1c.7.7.7 1.7 0 2.4s-1.7.7-2.4 0L.6 13.2c-.3-.3-.5-.8-.5-1.2.1-.4.2-.9.5-1.2zm0 0"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" fill="##000000" viewBox="0 0 14 24"><path d="M13.4 13.2L3 23.5c-.7.7-1.7.7-2.4 0s-.7-1.7 0-2.4L9.8 12 .6 2.9C0 2.3 0 1.2.6.5c.7-.7 1.7-.7 2.4 0l10.3 10.3c.3.3.5.8.5 1.2 0 .4-.1.9-.4 1.2zm0 0"/></svg></button>'
});

$('.nomination').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('beforeChange', currentSlide, nextSlide);
});
$('.nomination').on('afterChange', function(event, slick, currentSlide){
    console.log('afterChange', currentSlide);
});

$('.insta').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 6,
    swipeToSlide: true,
    arrows:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

