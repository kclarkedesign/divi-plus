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
          <div className="dp_simple_slider__slide-description">
            {/* slide title & content */}
            <h1 className='dp_simple_slider__slide-title'>{this.props.heading}</h1>
            <div className='dp_simple_slider__slide-content'>{this.props.content()}</div>
            {/* button */}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
