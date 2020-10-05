import React from "react";
import PropTypes from 'prop-types';

import "./RainbowFrameHOC.css";


class RainbowFrameHOC extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }
  getFrameDiv = (colors, n) => {
    if (n < colors.length) {

      return (
        <div
          style={{
            border: ` 4px solid ${colors[n]} `,
            margin: "5px",
            padding: "5px",
          }}
        > {this.getFrameDiv(colors, ++n)}</div>);
    } else {
      return (<div style={{
        margin: "10px 7px",
        padding: "10px 7px",
      }}   >{this.props.children}</div>);
    }
  }
  render() {

    return this.getFrameDiv(this.props.colors, 0);
  }
}




export default RainbowFrameHOC;