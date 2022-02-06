// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
import './style.css';


class Slider extends Component {

  static slug = 'dp_simple_slider';

  render() {

    return (
      <Fragment>
        <div className='dvpls-slider et_pb_slider'>
          <div className="dvpls-slides et_pb_slides">{this.props.content}</div>
        </div>
      </Fragment>
    );
  }
}

export default Slider;
