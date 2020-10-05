import React from 'react';

const withRainbowFrame = (colors) => {
  (Component) => {

    return (props) => {
      <div>
        <Component {...props} />
      </div>
    };
  }

}

withRainbowFrame.displayName = 'WithRanbFrame';
export default withRainbowFrame;