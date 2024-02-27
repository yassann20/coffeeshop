<?php get_header(); ?>
    
    <main>
        <!--ここからメインコンテンツ-->
        <?php get_template_part('template-parts/content','menu'); ?>

        <?php get_template_part('template-parts/content','topic'); ?>
        
        <?php get_template_part('template-parts/content','news'); ?>

        <?php get_template_part('template-parts/content','contact'); ?>

        <?php get_template_part('template-parts/content','map'); ?>
        
    </main>

    <?php get_footer(); ?>