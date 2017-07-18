import React from 'react';
import PropTypes from 'prop-types';
import Style from '../aya-schema.css';

export const UserAreCustomer = ({containerStyle}) => (
  <div className={Style.schema_element} style={containerStyle}>
    <span className={Style.text_top}>User</span>
    <span className={Style.text_middle}>are</span>
    <span className={Style.text_bottom}>CUSTOMERS</span>

    <img className={Style.flake_top} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
    <img className={Style.flake_bottom} src="/assets/flake/flake_white.svg" alt="flake which represent human"/>
  </div>
);

UserAreCustomer.defaultProps = {
  containerStyle: {}
};

UserAreCustomer.propTypes = {
  containerStyle: PropTypes.object
};
