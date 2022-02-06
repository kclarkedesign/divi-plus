<?php

class DVPLS_SimpleHeader extends ET_Builder_Module {

	public $slug       = 'dvpls_simple_header';
	public $vb_support = 'on';

	// protected $module_credits = array(
	// 	'module_uri' => 'https://www.kirkclarke.com',
	// 	'author'     => 'Kirk Clarke',
	// 	'author_uri' => 'https://www.kirkclarke.com',
	// );

	public function init() {
		$this->name = esc_html__( 'Simple Header', 'dvpls-divi-plus' );
	}

	public function get_fields() {
		return array(
			'heading'     => array(
				'label'           => esc_html__( 'Heading', 'dvpls-divi-plus' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input your desired heading here.', 'dvpls-divi-plus' ),
				'toggle_slug'     => 'main_content',
			),
			'content'     => array(
				'label'           => esc_html__( 'Content', 'dvpls-divi-plus' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Content entered here will appear below the heading text.', 'dvpls-divi-plus' ),
				'toggle_slug'     => 'main_content',
			),
		);
	}

	public function render( $unprocessed_props, $content = null, $render_slug ) {
		return sprintf(
			'<h1 class="dvpls-divi-plus-heading">%1$s</h1>
				<p>%2s</p>',
				esc_html( $this->props['heading'] ),
				$this->props['content']
		);
	}
}

new DVPLS_SimpleHeader;
