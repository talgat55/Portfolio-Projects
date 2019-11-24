<?php
/*
 * Template Name: Домашняя страница
 */


get_header(); ?>
    <h1 class="hide-title"><?php _e('Главная страница', 'light'); ?></h1>
    <div id="pagepiling" class="content-area">
        <div class="section" id="section1">
            <div class="home-slider-walp">
                <div class="home-slider swiper-container">
                    <?php
                    $args = [
                        'posts_per_page' => '-1',
                        'post_type' => 'sliders',
                        'post_status' => 'publish'
                    ];

                    $the_query = new WP_Query($args);
                    $detect = new Mobile_Detect();
                    while ($the_query->have_posts()) :
                        $the_query->the_post();
                        $post_id = $the_query->post->ID;

                        $title_one = returnTextLang('title-one');

                        $text_one = returnTextLang('text-one');
                        $title_two = returnTextLang('title-two');
                        $text_two = returnTextLang('text-two');
                        $video_mp4 = get_field('slider_video_mp4');
                        $video_webm = get_field('slider_video_webm');

                        $link_one = returnTextLang('link-one');
                        $link_two = returnTextLang('link-two');

                        if (empty($video_mp4)) {

                            $back = 'style="background: url(' . wp_get_attachment_image_src(get_post_thumbnail_id($post_id), "full")[0] . ') no-repeat!important;"';

                        } else {

                            $back = '';

                        }

                        ?>
                        <div class="item" <?= $back; ?>>
                            <?php
                            if (!empty($video_mp4)) { ?>
                                <div class="overlay-img"></div>
                                <div class="overlay-color"></div>
                                <?php if (!$detect->isMobile()) { ?>

                                    <div class="video-wrapper">

                                        <video autoplay loop controls="controls"
                                               poster="<?= wp_get_attachment_image_src(get_post_thumbnail_id($post_id), "full")[0]; ?>"
                                               preload="none" muted>
                                            <source src="<?= $video_mp4; ?>" type='video/mp4'>
                                            <source src="<?= $video_webm; ?>" type='video/webm'>
                                        </video>

                                    </div>

                                <?php } else { ?>

                                    <div class="mobile-img-background"
                                         style="background: url(<?= wp_get_attachment_image_src(get_post_thumbnail_id($post_id), "full")[0]; ?>); "></div>

                                <?php } ?>
                            <?php } ?>

                            <div class="container  relative-slider">
                                <div class="row">
                                    <div class="content-slider">

                                        <div class="row">
                                            <div class="first-block ">
                                                <h3>
                                                    <a href="<?= $link_one; ?>">
                                                        <?= $title_one; ?>
                                                    </a>

                                                </h3>
                                                <div class="text">
                                                    <?= $text_one; ?>
                                                </div>
                                            </div>
                                            <div class="second-block  ">
                                                <h3>
                                                    <a href="<?= $link_two; ?>">
                                                        <?= $title_two; ?>
                                                    </a>
                                                </h3>
                                                <div class="text">
                                                    <?= $text_two; ?>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                    <?php endwhile; ?>

                </div>
                <div class="container relative">
                    <div class="row">
                        <ul class="arr-slider">
                            <li>
                                <a href="#" class="prev">
                                    <img src="<?php echo get_theme_file_uri('/assets/images/arr.png') ?>"
                                         alt=" стрелка">
                                </a>
                            </li>
                            <li>
                                <a href="#" class="next">
                                    <img src="<?php echo get_theme_file_uri('/assets/images/arr.png') ?>"
                                         alt=" стрелка">
                                </a>
                            </li>


                        </ul>

                    </div>
                </div>
            </div>
        </div>

        <div class="section" id="section2">
            <a href="<?= ChangeUrlForPages('atmosfera'); ?>" class="one-type-link">
                <?php _e('Атмосфера заведения', 'light'); ?>
            </a>
        </div>
        <div class="section" id="section4"   >

            <div class="container">
                <div class="row">
                    <div class="event-block col-sm-12 col-xs-12">
                        <div class="row">
                            <h2 class="title-section">
                                <?php _e('События', 'light'); ?>
                            </h2>
                            <ul class="list-last-events">
                                <?php
                                $args = array(
                                    'posts_per_page' => '3',
                                    'post_type' => 'post',
                                    'orderby' => 'date',
                                    'order' => 'DESC',
                                    'post_status' => 'publish'

                                );

                                $the_query = new WP_Query($args);

                                if ($the_query->have_posts()) :
                                    while ($the_query->have_posts()) :
                                        $the_query->the_post();
                                        $post_id = $the_query->post->ID;
                                        $img_url = wp_get_attachment_url(get_post_thumbnail_id($post_id), 'event-image');
                                        $add_image = get_field('add_image_post', $post_id);
                                        $redyImage =  $add_image ? $add_image["sizes"]["event-image"] : $img_url;

                                        ?>
                                        <li class="item  col-md-4 col-sm-6 col-xs-12"   >
                                            <div class="img-block">
                                                <a href="<?= get_the_permalink($post_id); ?> "
                                                   title="Перейти на детальную страницу">
                                                    <img src="<?= $redyImage; ?>" alt="Изображение"/>
                                                </a>
                                            </div>
                                            <div class="date">
                                                <img src="<?php echo get_theme_file_uri('/assets/images/calendar.png') ?>"
                                                     alt="иконка">
                                                <p>
                                                    <?= get_the_date('d.m.Y'); ?>
                                                </p>

                                            </div>
                                            <h3 class="title">
                                                <a href="<?= get_the_permalink($post_id); ?> " title="Перейти на детальную страницу">
                                                    <?= get_the_title(); ?>
                                                </a>
                                            </h3>
                                            <div class="content">
                                                <?= mb_strimwidth(strip_tags(get_the_content($post_id)),'0','60', '...') ;?>
                                            </div>
                                            <a href="<?= get_the_permalink($post_id); ?>" class="link-more">
                                                <?php _e('Узнать подробнее', 'light'); ?>
                                            </a>

                                        </li>

                                    <?php
                                    endwhile;
                                endif;
                                wp_reset_query();

                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="section" id="section3">
            <div class="bg-block col-sm-6 col-xs-12">
                <div class="third-blocks">
                    <div>
                        <h2 class="center-flex">
                            <?php _e('Меню', 'light'); ?>
                        </h2>
                        <?php
                        $link_menu = get_field('link_menu_home', 'option');
                        $link_bar_menu = get_field('link_menu_bar_home', 'option');
                        $redyLinkMenu = $link_menu ? $link_menu : '';
                        $redyLinkMenuBar = $link_bar_menu ? $link_bar_menu : '';
                        ?>
                        <a href="<?= $redyLinkMenu; ?>" target="_blank" class="two-type-link">

                            <?php _e('посмотреть', 'light'); ?>
                        </a>
                    </div>
                </div>
            </div>
            <div class="bg-block col-sm-6 col-xs-12">
                <div class="third-blocks">
                    <div>
                        <h2 class="center-flex">

                            <?php _e('Барная
                            карта', 'light'); ?>
                        </h2>
                        <a href="<?= $redyLinkMenuBar; ?>" target="_blank" class="two-type-link">

                            <?php _e('посмотреть', 'light'); ?>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </div><!-- #primary -->

<?php get_footer();
