// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class HelloWorld extends Component {

  static slug = 'dvpls_hello_world';

  render() {
  
    return (
      <h1>
        {this.props.content()}
      </h1>
    );
  }
}

export default HelloWorld;
