<?php

class DP_Module_Slider_Item extends ET_Builder_Module {

    protected $module_credits = array(
    	'module_uri' => 'https://www.kirkclarke.com',
    	'author'     => 'Kirk Clarke',
    	'author_uri' => 'https://www.kirkclarke.com',
    );

    public function init() {
		$this->name            				= et_builder_i18n( 'DiviPlus Slide' );
		$this->plural          				= esc_html__( 'DiviPlus Sliders', 'dvpls-divi-plus' );
		$this->slug            				= 'dp_simple_slide';
		$this->vb_support      				= 'on';
		$this->type            				= 'child';
		$this->child_title_var             	= 'admin_title';
		$this->child_title_fallback_var    	= 'heading';
		$this->advanced_setting_title_text = esc_html__( 'New Slide', 'dvpls-divi-plus' );
		$this->settings_text               = esc_html__( 'Slide Settings', 'dvpls-divi-plus' );
		$this->main_css_element            = '%%order_class%%';
	}

	public function get_fields() {
		return array(
			'heading'              => array(
				'label'           => et_builder_i18n( 'Title' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Define the title text for your slide.', 'dvpls-divi-plus' ),
				'toggle_slug'     => 'main_content',
				'dynamic_content' => 'text',
				'mobile_options'  => true,
				'hover'           => 'tabs',
			),
			'content'              => array(
				'label'           => et_builder_i18n( 'Body' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input your main slide text content here.', 'dvpls-divi-plus' ),
				'toggle_slug'     => 'main_content',
				'dynamic_content' => 'text',
				'mobile_options'  => true,
				'hover'           => 'tabs',
			),
		);
	}

	public function render( $unprocessed_props, $content, $render_slug ) {
        $heading = $this->_esc_attr( 'heading', 'full' );
		$content = $this->content;

		return sprintf(
            '<div class="dp_simple_slide">
				<div class="dp_simple_slide__container et_pb_container clearfix">
					<div class="dp_simple_slide__container_inner et_pb_slider_container_inner">
						<div class="dp_simple_slide__description et_pb_slide_description">
							<h1 class="dp_simple_slide__title et_pb_slide_title">%1$s</h1>
							<div class="dp_simple_slide__content et_pb_slide_content">%2$s</div>
						</div>
					</div>
				</div>
			</div>
			',
			$heading,
			$content
		);
	}
}

new DP_Module_Slider_Item;
