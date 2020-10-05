import React from 'react';

// function withRainbowFrame(color) {
//     return function(Component) {
//       return props => (
//         <div style={{border:`5px solid ${color}`, padding: '10px', margin: '5px'}}>
//           <Component {...props} />
//         </div>
//       );
//     };
// }

const  withRainbowFrame = (colors) => (Component) => {
  return props => {
    
    let toOut = colors.reduceRight((prev, curColor) => {

    prev = <div style={{border: '4px solid ' +curColor, margin: '5px', padding: '5px'}}>{prev}</div> ;
      return prev;
    }, <div>{props.children}</div> );
    
    return  toOut; 
  }

}

export default withRainbowFrame ;
