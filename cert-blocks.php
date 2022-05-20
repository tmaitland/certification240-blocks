<?php

/**
 * Plugin Name: 240 Certification Blocks
 * Plugin URI: 
 * Description: Blocks made to accompany the 240 Certification theme
 * Author: Toni-Lee Maitland
 * Author URI: 
 * Version: 1.0
 *
 */

 // Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

 define('CERT_PLUGIN_URL', plugins_url( 'cert-blocks'));
 define('CERT_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));

 function cert_gutenblocks() {
   // Block front-end style  
   wp_register_style(
       'cert-blocks-frontend-styles',
       CERT_PLUGIN_URL . '/build/index.css',
       array('wp-edit-blocks'),
       filemtime(CERT_PLUGIN_DIR_PATH . 'build/index.css')
   );

   // Block back-end style  
   wp_register_style(
       'cert-blocks-editor-styles',
       CERT_PLUGIN_URL . '/build/index.css',
       array('wp-edit-blocks'),
       filemtime(CERT_PLUGIN_DIR_PATH . 'build/index.css')
   );

   wp_register_script(
       'cert-header-blocks-edit',
       CERT_PLUGIN_URL . '/build/index.js',
       array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
       filemtime(CERT_PLUGIN_DIR_PATH . 'build/index.js')
   );

   register_block_type(
    'cert-blocks/website-blocks', array(
        // Enqueue style.css on both frontend & backend.
        'style'         => 'cert-blocks-frontend-styles',
        // Enqueue editor.css in the editor only.
        'editor_style'  => 'cert-blocks-editor-styles',
        // Enqueue full-header.js in the editor only.
        'editor_script' => 'cert-header-blocks-edit'
     )
   );

 };

 add_action( 'init', 'cert_gutenblocks');

 function cert_block_categories( $categories, $post ){
	return array_merge(
		array(
			array(
				'slug' => 'cert-block',
				'title' => __('240 Certification Blocks', 'cert-blocks'),
			)
		),
		$categories
	);
}

add_filter('block_categories', 'cert_block_categories', 10, 2);