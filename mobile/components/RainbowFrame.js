import React from "react";
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import "./RainbowFrame.css";


class RainbowFrame extends React.Component {
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

// const RainbowFrame = ({ colors }) => {


//   return(
//     <div
//       style={{color: colors[2], border: '1px solid #3423f'}}
//     > {this.props.children}</div>
//   );
// }

// RainbowFrame.propTypes = {
//   colors: PropTypes.array,
// };

// RainbowFrame.defaultProps = {
//   colors: [],
// }


export default RainbowFrame;