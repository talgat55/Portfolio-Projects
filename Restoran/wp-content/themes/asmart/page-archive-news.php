<?php
/*
 * Template Name: Страница  архиа новостей
 */
$single_id = get_the_ID();
get_header(); ?>
    <div id="primary" class="content-area  ">
        <div class="row relative">
            <div class="image-block-bg">
                <div class="col-sm-7 col-xs-12">

                </div>
                <?php
                $banner_about = get_field('banner_image_about', 'option');
                $banner_booking = get_field('banner_image_booking', 'option');

                $redy_url = $banner_about ? $banner_about : $banner_booking;

                ?>
                <div class="col-sm-5 col-xs-12  hidden-xs  booking-img " style="background: url(<?= $redy_url; ?>);">


                </div>
            </div>
            <div class="cont-mains">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 col-xs-12">
                            <div class="row">

                                <?php


                                ?>
                                <div class="news-content">
                                    <ul class="navigation-tabs">
                                        <li>
                                            <a href="<?=get_latest_post_link(); ?>" class="item-tab  new  ">
                                                <?php  _e('Актуальные', 'light'); ?>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="<?=ChangeUrlForPages('news');?>" class="item-tab  archive  active">

                                                <?php  _e('Архив', 'light'); ?>
                                            </a>
                                        </li>


                                    </ul>
                                    <div class="content-news">

                                        <ul class="content-list">
                                            <?php

                                            $args = array(
                                                'posts_per_page' => '10',
                                                'post_type' => 'post',
                                                'orderby' => 'date',
                                                'order' => 'DESC',
                                                'post_status' => 'publish',
                                                'paged' => (get_query_var('paged')) ? get_query_var('paged') : 2

                                            );

                                            $the_query = new WP_Query($args);

                                            if ($the_query->have_posts()) :
                                                while ($the_query->have_posts()) :
                                                    $the_query->the_post();
                                                    $post_id = $the_query->post->ID;


                                                    if($single_id ==$post_id ){
                                                        $active_class = 'active';
                                                    }else{
                                                        $active_class = '';
                                                    }
                                                    ?>
                                                    <li>
                                                        <a href="<?= get_the_permalink($post_id); ?>?paged=<?=(get_query_var('paged')) ? get_query_var('paged') : 2;?>"  class="<?=$active_class; ?>">
                                                            <?= get_the_title(); ?>
                                                        </a>
                                                    </li>

                                                <?php
                                                endwhile;
                                            else:

                                                echo "<p class='not-found-articles'>".__('Записей не найдено', 'light')."</p>";

                                            endif;
                                            ?>
                                        </ul>
                                        <?php
                                        $GLOBALS['wp_query'] = $the_query;
                                        wpbeginner_numeric_posts_nav();
                                        wp_reset_query();

                                        ?>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>


<?php get_footer();
