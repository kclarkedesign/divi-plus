// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
import './style.css';


class SimpleHeader extends Component {

  static slug = 'dvpls_simple_header';

  render() {

    return (
      <Fragment>
        <h1 className="dvpls-simple-header__heading">{this.props.heading}</h1>
        <div className="dvpls-simple-header__content">{this.props.content()}</div>
      </Fragment>
    );
  }
}

export default SimpleHeader;
