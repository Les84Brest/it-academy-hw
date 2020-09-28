import React, {Children, Component} from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

const Icon = (name, className, onClick,
  ) => {

    const classes = classNames(
      'fa',
      `fa-${name}`,
      className,
    );
  return(
    <i
      className={classes}
      onClick={onClick}
    ></i>
  );
}
 
Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}; 
Icon.defaultProps = {
  name: '',
  className: '',
  onClick: () => {},
};

export default Icon;