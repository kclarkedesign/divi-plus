<?php

class DVPLS_HelloWorld extends ET_Builder_Module {

	public $slug       = 'dvpls_hello_world';
	public $vb_support = 'on';

	protected $module_credits = array(
		'module_uri' => 'https://www.kirkclarke.com',
		'author'     => 'Kirk Clarke',
		'author_uri' => 'https://www.kirkclarke.com',
	);

	public function init() {
		$this->name = esc_html__( 'Hello World', 'dvpls-divi-plus' );
	}

	public function get_fields() {
		return array(
			'content' => array(
				'label'           => esc_html__( 'Content', 'dvpls-divi-plus' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Content entered here will appear inside the module.', 'dvpls-divi-plus' ),
				'toggle_slug'     => 'main_content',
			),
		);
	}

	public function render( $attrs, $content = null, $render_slug ) {
		return sprintf( '<h1>%1$s</h1>', $this->props['content'] );
	}
}

new DVPLS_HelloWorld;
