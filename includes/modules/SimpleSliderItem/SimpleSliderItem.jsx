// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class Slider extends Component {

  static slug = 'dp_simple_slide';
  

  render() {
    console.log(this.props);
    return (
      <div className="swiper-slide dp_simple_slide__description">
        {/* slide title & content */}
        <div className='dp_simple_slide__title'>{this.props.heading}</div>
        <div className='dp_simple_slide__content'>{this.props.content()}</div>
        {/* button */}
      </div>
    );
  }
}

export default Slider;
