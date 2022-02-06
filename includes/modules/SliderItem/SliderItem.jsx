// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
// import './style.css';


class SliderItem extends Component {

  static slug = 'dv_pls_slide';

  render() {

    return (
      <Fragment>
        <div className="module-name" data-slide-id="">
          {/* parallax image bg */}
          {/* use bg overlay? */}
          <div className="dvpls-container et_pb_container clearfix">
            <div className="dvpls-slider-container__inner et_pb_slider_container_inner">
              {/* image */}
              <div className="dvpls-slide__description et_pb_slide_description">
                {/* slide title & content */}
                <div className='dvpls-slide__title et_pb_slide_title'>{this.props.heading}</div>
                <div className='dvpls-slide__content et_pb_slide_content'>{this.props.content()}</div>
                {/* button */}
              </div>
            </div>
          </div>
          {/* video bg */}
        </div>
      </Fragment>
    );
  }
}

export default SliderItem;
