$(function () {
    //SP版メニューバーの挙動
    $(window).on('load', function () {
        $('#menubar').on('click', function () {
            $(this).children().toggleClass('active');
            $('#header-menu').toggleClass('active-menu');
        });
    });
    //スクロールされた場合にSPとTAB以上に別々の動作をさせる
    $(window).on('scroll', function () {
        let nowPosition = $(window).scrollTop();
        let width = $(window).innerWidth(); //ブラウザの横幅を取得
        let headerHeight = $("header").innerHeight() - ( $(window).innerHeight() / 10 );//ヘッダーの高さとメインコンテンツのネガティブマージンを差し引いたものを取得
        //一定量スクロールしたらメニューバーの色を変更
        if (nowPosition >= 80) {
            $('#menubar span').addClass('color');
        } else {
            $('#menubar span').removeClass('color');
        }
        //タブレットサイズ以上のヘッダーメニューでは一定量スクロールされたらメニューの文字色を変更する
        if( nowPosition >= headerHeight && width >= 768){
             $('#header-menu a').addClass('font-color');
        } else {
            $('#header-menu a').removeClass('font-color');
        }
    });
});
const topslider = new Swiper('.top', {
    centeredSlides: true,
    autoHeight: true,
    loop: true,
    speed: 500,
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
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        1240: {
            slidesPerView: 3,
            spaceBetween: 200,
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバーの要素
        hide: true, // スクロールバーを非表示にする
    },
});

const foodmenu = new Swiper('.foodmenu', {
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

const topictext = new Swiper('.topictext', {
    direction: 'vertical',
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
    },
});

const topicimg = new Swiper('.topicimg', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//topicimg上にあるボタンで二つのスライダーを動かす。
document.querySelector('.swiper-button-next').addEventListener('click', function () {
    topictext.slideNext(); // topictextはSwiperのインスタンスを指します
});
document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    topictext.slidePrev();
});

//topicimgとtopictextを連動させて動かす
topicimg.controller.control = [topictext];
topictext.controller.control = [topicimg];