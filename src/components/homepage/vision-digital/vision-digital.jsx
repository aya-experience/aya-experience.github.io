import React from 'react';
import {FlakeGroupContainer} from '../../commons/flakes-group/flake-group.container';
import Styles from './vision-digital.css';

export const VisionDigitalComponent = () => {
  return (
    <FlakeGroupContainer className={Styles.section}>
      <img
        src="/assets/background/palms.jpg"
        alt="forest baground image"
        className="flakes_background_parralax_img"
        />

      <div>
        <img className="flake_left_img" src="/assets/flake/digital.png" alt="visions illustration"/>
        <div className="flake_left_content">
          <h4 className="flake_title">Visions</h4>
          <h3 className="flake_subtitle">&lt;user centric&gt;</h3>
        </div>
      </div>

      <div>
        <img className="flake_right_img" src="/assets/flake/digital.png" alt="digital <experience> illustration"/>
        <div className="flake_right_content">
          <h3 className="flake_title">Digital</h3>
          <h3 className="flake_subtitle">&lt;experience&gt;</h3>
          <p className="flake_paragraph">
            User expérience réalisée en harmonie avec votre stratégie produit.
            Elle est au centre de la démarche.
            Nos équipes ont cette conception centrée sur les usages.
          </p>
        </div>
      </div>
    </FlakeGroupContainer>
  );
};

VisionDigitalComponent.propTypes = {};
