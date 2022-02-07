// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class SimpleSlider extends Component {

  static slug = 'dp_simple_slider';

  render() {
    
    return (
      <div className="swiper">
        <div className="swiper-wrapper">
          {this.props.content}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}

export default SimpleSlider;
