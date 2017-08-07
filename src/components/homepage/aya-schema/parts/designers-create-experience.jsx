import React from 'react';
import PropTypes from 'prop-types';
import Style from '../aya-schema.css';

export const DesignersCreateExperiences = ({containerStyle}) => (
  <div className={Style.schema_element} style={containerStyle}>
    <span className={Style.text_top}>Designers</span>
    <span className={Style.text_middle}>create</span>
    <span className={Style.text_bottom}>EXPERIENCES</span>

    <img className={Style.flake_top} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
    <img className={Style.flake_bottom} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
  </div>
);

DesignersCreateExperiences.defaultProps = {
  containerStyle: {}
};

DesignersCreateExperiences.propTypes = {
  containerStyle: PropTypes.object
};
