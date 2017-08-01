import React from 'react';
import PropTypes from 'prop-types';
import Style from '../aya-schema.css';

export const ClientsBringService = ({containerStyle}) => (
  <div className={Style.schema_element} style={containerStyle}>
    <span className={Style.text_top}>Clients</span>
    <span className={Style.text_middle}>bring</span>
    <span className={Style.text_bottom}>SERVICES</span>

    <img className={Style.flake_top} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
    <img className={Style.flake_bottom} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
  </div>
);

ClientsBringService.defaultProps = {
  containerStyle: {}
};

ClientsBringService.propTypes = {
  containerStyle: PropTypes.object
};
