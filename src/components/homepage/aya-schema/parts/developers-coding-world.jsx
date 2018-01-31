import React from 'react';
import PropTypes from 'prop-types';
import Style from '../aya-schema.css';

export const DevelopersCodingWorld = ({containerStyle}) => (
  <div className={Style.schema_element} style={containerStyle}>
    <span className={Style.text_top}>Developers</span>
    <span className={Style.text_middle}>code</span>
    <span className={Style.text_bottom}>THE WORLD</span>

    <img className={Style.flake_top} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
    <img className={Style.flake_bottom} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
  </div>
);

DevelopersCodingWorld.defaultProps = {
  containerStyle: {}
};

DevelopersCodingWorld.propTypes = {
  containerStyle: PropTypes.object
};
