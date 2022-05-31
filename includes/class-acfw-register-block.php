<?php
/**
 * Register Block Class
 *
 * @package ACF Guten Blocks
 */

class ACFW_Register_Block {

	/**
	 * Constructor function.
	 */
	function __construct() {

		add_action( 'acf/init', [ $this, 'register_blocks' ] );

	}

	/**
	 * Register Blocks.
	 */
	public function register_blocks() {

		if( ! function_exists( 'acf_register_block_type' ) ) {
			return;
		}

		// Register a tabs block.
		acf_register_block_type( [
			'name'              => 'tabs',
			'title'             => __( 'Tabs' ),
			'icon'				=> 'table-row-after',
			'description'       => __( 'A custom tabs block.' ),
			'render_template'   => ACFB_BLOCK_TEMPLATE_PATH . 'tabs.php',
			'category'          => 'cert-block',
		] );

	}
}

new ACFW_Register_Block();