import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from './aya-schema.css';

import {AyaBuildInterface} from './parts/aya-build-interface';
import {ClientsBringService} from './parts/clients-bring-services';
import {DesignersCreateExperiences} from './parts/designers-create-experience';
import {DevelopersCodingWorld} from './parts/developers-coding-world';
import {UserAreCustomer} from './parts/user-are-customers';

const AyaSchema = ({
  refFunc0,
  scaleUpCenter,
  opacityCenter,
  translateXTopLeft,
  translateXBottomLeft,
  translateXTopRight,
  translateXBottomRight,
  isDisplayed3D
}) => (
  <section ref={refFunc0} className={classNames('flakes_group_parralax', {paralax3d: isDisplayed3D}, Styles.section)}>
    <img
      src="/assets/background/ima.jpg"
      alt="palms baground image"
      className={classNames('flakes_background_parralax', 'flakes_background_parralax_img')}
      />

    <div className={`flakes_container ${Styles.schema_container}`}>
      <div className={Styles.schema_first_row}>
        <UserAreCustomer containerStyle={{transform: `translate3d(${translateXTopLeft}%, 0, 0)`}}/>
        <ClientsBringService containerStyle={{transform: `translate3d(${translateXTopRight}%, 0, 0)`}}/>
      </div>
      <div className={Styles.schema_middle_row}>
        <AyaBuildInterface containerStyle={{transform: `scale(${scaleUpCenter})`, opacity: opacityCenter}}/>
      </div>
      <div className={Styles.schema_last_row} >
        <DesignersCreateExperiences containerStyle={{transform: `translate3d(${translateXBottomLeft}%, 0, 0)`}}/>
        <DevelopersCodingWorld containerStyle={{transform: `translate3d(${translateXBottomRight}%, 0, 0)`}}/>
      </div>
    </div>
  </section>
);

AyaSchema.propTypes = {
  refFunc0: PropTypes.func.isRequired,
  scaleUpCenter: PropTypes.string.isRequired,
  opacityCenter: PropTypes.string.isRequired,
  translateXTopLeft: PropTypes.string.isRequired,
  translateXBottomLeft: PropTypes.string.isRequired,
  translateXTopRight: PropTypes.string.isRequired,
  translateXBottomRight: PropTypes.string.isRequired,
  isDisplayed3D: PropTypes.bool.isRequired
};

export const AyaSchemaComponent = AyaSchema;
