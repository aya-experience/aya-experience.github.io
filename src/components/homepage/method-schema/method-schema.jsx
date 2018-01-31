import React from 'react';
import PropTypes from 'prop-types';
import Styles from './method-schema.css';
import classNames from 'classnames';

export const MethodSchemaComponent = ({isDisplayed3D}) => {
  return (
    <section className={classNames('flakes_group_parralax', {paralax3d: isDisplayed3D}, Styles.section)}>

      <div className="flakes_background">
        <img
          src="/assets/background/ima.jpg"
          alt="mountain baground image"
          className="flakes_background_parralax_img"
          />
      </div>
      <div className="flakes_container_parralax">
        <div className="flakes_container">
          <img className={Styles.schema} src="/assets/tmp_method_schema-V2.png" alt="description of our method"/>
        </div>
      </div>
    </section>
  );
};

MethodSchemaComponent.propTypes = {
  isDisplayed3D: PropTypes.bool.isRequired
};
