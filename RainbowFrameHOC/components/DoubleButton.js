import React, { Children, Component, Fragment } from "react";
import PropTypes from 'prop-types';



const DoubleButton = (props /*children, cbPressed, caption1, caption2,*/) => {
  console.log(props);
  let btn1Ref = React.createRef();
  let btn2Ref = React.createRef();
  const onClickAction = (e) => {
    props.cbPressed(200);
  }
  
  return (
    <div className='double__button'>
      <input type="button" ref={btn1Ref} value={props.caption1} onClick={onClickAction}/>
      {props.children}
      <input type="button" ref={btn2Ref} value={props.caption2} onClick={onClickAction}/>
    </div>
  );


}

DoubleButton.propTypes = {
  children: PropTypes.node,
  cbPressed: PropTypes.func,
  caption1: PropTypes.string,
  caption2: PropTypes.string,
}

export default DoubleButton;