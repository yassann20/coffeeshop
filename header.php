<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/site-data/css/style.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/site-data/css/sanitize.css">
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <title>Document</title>
    <?php wp_head(); ?>
</head>

<body>
    <header>
        <!--ヘッダー内にはmenuを入れない-->
        <div class="swiper-container top">
            <!--ここはトップスライダー-->
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/site-data/photos/pc/topsample.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/site-data/photos/pc/topsample.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/site-data/photos/pc/topsample.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/site-data/photos/pc/topsample.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/site-data/photos/pc/topsample.jpg" alt="">
                </div>
            </div>
            <!-- ページネーションがいるときか下記を追記 -->
            <div class="swiper-pagination"></div>

            <!-- 左右のナビゲーションボタンが必要であれば下記も追記 -->
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>

        </div>
    </header>

    <div id="menubar">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div id="header-menu">
        <nav>
            <ul>
                <li><a href="#top">top</a></li>
                <li><a href="#topic">topic</a></li>
                <li><a href="#news">news</a></li>
                <li><a href="#contact">contact</a></li>
                <li><a href="#map">map</a></li>
            </ul>
        </nav>
    </div>