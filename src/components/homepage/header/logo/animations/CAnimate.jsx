import React from 'react';
import PropTypes from 'prop-types';

/** Conditional animate * */
export const CAnimate = ({animate, ...otherProps}) => {
  return animate ? <animate {...otherProps}/> : null;
};

CAnimate.defaultProps = {
  animate: false
};

CAnimate.propTypes = {
  animate: PropTypes.bool
};
