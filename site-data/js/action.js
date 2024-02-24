const topslider = new Swiper('.top', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 200,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 40, // ブレークポイントでスペースを調整
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 60, // ブレークポイントでスペースを調整
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 450, // ブレークポイントでスペースを調整
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバーの要素
        hide: true, // スクロールバーを非表示にする
    },
});

const foodmenu = new Swiper('.foodmenu', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 40, // ブレークポイントでスペースを調整
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        1240: {
            slidesPerView: 4,
        },
    },
    
});
const drinkmenu = new Swiper('.drinkmenu', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 40, // ブレークポイントでスペースを調整
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        1240: {
            slidesPerView: 4,
        },
    },
    
});

const topicmenu = new Swiper('.topicmenu', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.topic-button-next',
        prevEl: '.topic-button-prev',
    },
});

