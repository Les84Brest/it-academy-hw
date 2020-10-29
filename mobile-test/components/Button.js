
import React, {Children, Component} from "react";
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// import './Button.css';



const Button = ({children, onClick, className, disabled, active, ...attrs}) => {
  
  const classes = ClassNames(
    'btn',
    className,
    {active},
  );

  const onClickAction = e => {
    if(disabled){
      e.preventDefault();
    }else{
      return onClick(e);
    }
  }
    const Tag = attrs.href ? 'a' : 'button';
  return(
    <Tag
    {...attrs}
    className={classes}
    onClick={onClickAction}
    disabled={disabled}
    >{children}</Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'DefaultButton',
  onClick : () => {},
  className : '',
  disabled: false,
  active: false,
}
export default Button;
