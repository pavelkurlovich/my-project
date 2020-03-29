$(document).ready(function () {
    $('.slider1').slick(
        {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    );
});
$(document).ready(function () {
    $('.slider2').slick(
        {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            // centerMode: true
        }
    );
});
$(document).ready(function () {
    $('.slider3').slick(
        {
            centerMode: true,
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    );
});




