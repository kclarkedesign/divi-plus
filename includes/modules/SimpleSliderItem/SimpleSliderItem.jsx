// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class Slider extends Component {

  static slug = 'dp_simple_slide';
  

  render() {
    console.log(this.props);
    return (
      <div className="dp_simple_slider__slide">
        <div className="dp_simple_slider__slide-inner">
          <div className="swiper-slide dp_simple_slide__slide-description">
            {/* slide title & content */}
            <div className='dp_simple_slide__slide-title'>{this.props.heading}</div>
            <div className='dp_simple_slide__slide-content'>{this.props.content()}</div>
            {/* button */}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
