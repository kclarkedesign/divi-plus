// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
// import './style.css';


class Slider extends Component {

  static slug = 'dp_simple_slide';

  render() {

    return (
      <Fragment>
        <div className="module-name" data-slide-id="">
          {/* parallax image bg */}
          {/* use bg overlay? */}
          <div className="dp_simple_slide__container et_pb_container clearfix">
            <div className="dp_simple_slide__container_inner et_pb_slider_container_inner">
              {/* image */}
              <div className="dp_simple_slide__description et_pb_slide_description">
                {/* slide title & content */}
                <div className='dp_simple_slide__title et_pb_slide_title'>{this.props.heading}</div>
                <div className='dp_simple_slide__content et_pb_slide_content'>{this.props.content()}</div>
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

export default Slider;
