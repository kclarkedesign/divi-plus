// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class SimpleSlider extends Component {

  static slug = 'dp_simple_slider';

  render() {
    
    return (
      <div className="dp_simple_slider__inner">
        <div className="dp_simple_slider__slides">
          {this.props.content}
        </div>
        <div className="dp_simple_slider__controls">
          <div className="dp_simple_slider__pagination"></div>
          <div className="dp_simple_slider__prev"></div>
          <div className="dp_simple_slider__next"></div>
        </div>
      </div>
    );
  }
}

export default SimpleSlider;
