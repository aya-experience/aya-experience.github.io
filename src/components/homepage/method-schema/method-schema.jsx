import React from 'react';
import PropTypes from 'prop-types';
import Styles from './method-schema.css';

export const MethodSchemaComponent = ({
  refFunc0,
  refFunc1,
  componentHeight,
  translateYImgBackground,
  translateYSchema
}) => {
  return (
    <section ref={refFunc0} className={Styles.section} style={{height: componentHeight}}>
      <img
        ref={refFunc1}
        src="/assets/background/road-snow.jpg"
        alt="mountain baground image"
        className={Styles.section_img}
        style={{transform: `translateY(${translateYImgBackground}%)`}}
        />
      <div className="flakes_container" style={{transform: `translateY(${translateYSchema}%)`}}>
        <img className={Styles.schema} src="/assets/tmp_method_schema.png" alt="description of our method"/>
      </div>
    </section>
  );
};

MethodSchemaComponent.propTypes = {
  translateYImgBackground: PropTypes.string.isRequired,
  translateYSchema: PropTypes.string.isRequired,
  componentHeight: PropTypes.string.isRequired,
  refFunc0: PropTypes.func.isRequired,
  refFunc1: PropTypes.func.isRequired
};
