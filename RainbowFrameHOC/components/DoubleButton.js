import React, { Children, Component, Fragment } from "react";
import PropTypes from 'prop-types';


class DoubleButton extends React.Component {
  

  static propTypes = {
    
    cbPressed: PropTypes.func,
    caption1: PropTypes.string,
    caption2: PropTypes.string,
  }


  btn1Ref = React.createRef();
  btn2Ref = React.createRef();

  handleOnClickBtn = (e) => {
    
    this.props.cbPressed(e.target.dataset.text);
  }

  render() {
    return(
    <div className='double__button'>
      <input type="button" ref={this.btn1Ref} value={this.props.caption1} onClick={this.handleOnClickBtn} data-text="От" />
      {this.props.children}
      <input type="button" ref={this.btn2Ref} value={this.props.caption2} onClick={this.handleOnClickBtn} data-text="винта"/>
    </div>
    );
  }
}


// const DoubleButton = (props /*children, cbPressed, caption1, caption2,*/) => {

//   let btn1Ref = React.createRef();
//   let btn2Ref = React.createRef();
//   const onClickAction = (e) => {
//     props.cbPressed(200);
//   }

//   return (
//     <div className='double__button'>
//       <input type="button" ref={btn1Ref} value={props.caption1} onClick={onClickAction} />
//       {props.children}
//       <input type="button" ref={btn2Ref} value={props.caption2} onClick={onClickAction} />
//     </div>
//   );


// }

// DoubleButton.propTypes = {
//   children: PropTypes.node,
//   cbPressed: PropTypes.func,
//   caption1: PropTypes.string,
//   caption2: PropTypes.string,
// }

export default DoubleButton;