import React from 'react';
import PropTypes from 'prop-types';
import Style from '../aya-schema.css';

export const AyaBuildInterface = ({containerStyle}) => (
  <div className={Style.schema_element} style={containerStyle}>
    <span className={Style.text_top}>AYA</span>
    <span className={Style.text_middle}>builds</span>
    <span className={Style.text_bottom}>INTERFACES</span>

    <img className={Style.flake_top} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
    <img className={Style.flake_bottom} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
  </div>
  );

AyaBuildInterface.defaultProps = {
  containerStyle: {}
};

AyaBuildInterface.propTypes = {
  containerStyle: PropTypes.object
};
