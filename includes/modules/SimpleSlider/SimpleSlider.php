<?php

class DP_Module_Slider extends ET_Builder_Module {

    protected $module_credits = array(
    	'module_uri' => 'https://www.kirkclarke.com',
    	'author'     => 'Kirk Clarke',
    	'author_uri' => 'https://www.kirkclarke.com',
    );

    public function init() {
		$this->name            = esc_html__( 'DiviPlus Slider', 'dvpls-divi-plus' );
		$this->plural          = esc_html__( 'DiviPlus Sliders', 'dvpls-divi-plus' );
		$this->slug            = 'dp_simple_slider';
		$this->vb_support      = 'on';
		$this->child_slug      = 'dp_simple_slide';
		$this->child_item_text = et_builder_i18n( 'Slide' );
	}

	public function get_fields() {
		return array();
	}

	public function render( $unprocessed_props, $content, $render_slug ) {
        $content = $this->content;

		return sprintf(
            '<div class="dp_simple_slider__inner">
				<div class="dp_simple_slider__slides">
					%1$s
				</div>
				<div class="dp_simple_slider__controls">
					<div class="dp_simple_slider__pagination"></div>
					<div class="dp_simple_slider__prev"></div>
					<div class="dp_simple_slider__next"></div>
				</div>
			</div>
			',
			$content
		);
	}
}

new DP_Module_Slider;
