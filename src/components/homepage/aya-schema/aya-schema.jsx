import React from 'react';
import PropTypes from 'prop-types';
import Styles from './aya-schema.css';

import {AyaBuildInterface} from './parts/aya-build-interface';
import {ClientsBringService} from './parts/clients-bring-services';
import {DesignersCreateExperiences} from './parts/designers-create-experience';
import {DevelopersCodingWorld} from './parts/developers-coding-world';
import {UserAreCustomer} from './parts/user-are-customers';

const AyaSchema = ({
  refFunc0,
  refFunc1,
  componentHeight,
  translateYImgBackground,
  translateYSchema,
  scaleUpCenter,
  opacityCenter,
  translateXTopLeft,
  translateXBottomLeft,
  translateXTopRight,
  translateXBottomRight
}) => (
  <section ref={refFunc0} className={Styles.section} style={{height: componentHeight}}>
    <img
      ref={refFunc1}
      src="/assets/background/olive-tree.jpg"
      alt="palms baground image"
      className={Styles.section_img}
      style={{transform: `translateY(${translateYImgBackground}%)`}}
      />
    <div className={`flakes_container ${Styles.schema_container}`} style={{transform: `translateY(${translateYSchema}%)`}}>
      <div className={Styles.schema_first_row}>
        <UserAreCustomer containerStyle={{transform: `translateX(${translateXTopLeft}%)`}}/>
        <ClientsBringService containerStyle={{transform: `translateX(${translateXTopRight}%)`}}/>
      </div>
      <div className={Styles.schema_middle_row}>
        <AyaBuildInterface containerStyle={{transform: `scale(${scaleUpCenter})`, opacity: opacityCenter}}/>
      </div>
      <div className={Styles.schema_last_row} >
        <DesignersCreateExperiences containerStyle={{transform: `translateX(${translateXBottomLeft}%)`}}/>
        <DevelopersCodingWorld containerStyle={{transform: `translateX(${translateXBottomRight}%)`}}/>
      </div>
    </div>
  </section>
);

AyaSchema.propTypes = {
  refFunc0: PropTypes.func.isRequired,
  refFunc1: PropTypes.func.isRequired,
  componentHeight: PropTypes.string.isRequired,
  translateYImgBackground: PropTypes.string.isRequired,
  translateYSchema: PropTypes.string.isRequired,
  scaleUpCenter: PropTypes.string.isRequired,
  opacityCenter: PropTypes.string.isRequired,
  translateXTopLeft: PropTypes.string.isRequired,
  translateXBottomLeft: PropTypes.string.isRequired,
  translateXTopRight: PropTypes.string.isRequired,
  translateXBottomRight: PropTypes.string.isRequired
};

export const AyaSchemaComponent = AyaSchema;
