// 1.	Найти три изображения из любимых фильмов и реализовать простой слайдер.
// 			Можно через slick, можно через другие библиотеки

$('.movie-slider').slick({
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    infinite: false,
    waitForAnimate: false
});