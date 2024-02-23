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

        640: {
            slidesPerView: 2.5,
            spaceBetween: 30, // ブレークポイントでスペースを調整
        },
        768: {
            slidesPerView: 2.75,
            spaceBetween: 40, // ブレークポイントでスペースを調整
        },
        1080: {
            slidesPerView: 3.25,
            spaceBetween: 50, // ブレークポイントでスペースを調整
        },
        1280: {
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

