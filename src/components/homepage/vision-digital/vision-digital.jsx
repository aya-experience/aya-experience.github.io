import React from 'react';
import PropTypes from 'prop-types';
import Styles from './vision-digital.css';

export const VisionDigitalComponent = ({translateYImgBackground, componentHeight, refToSize, translateYImgEcaille, translateXLeftEcaille, translateXRightEcaille}) => {
  return (
    <section ref={refToSize} className={Styles.vision} style={{height: componentHeight}}>
      <img
        src="/assets/background/palms.jpg"
        alt="forest baground image"
        className={Styles.vision_img}
        style={{transform: `translateY(${translateYImgBackground}%)`}}
        />
      <div className="flakes_container flakes_container_offset" style={{transform: `translateY(${translateYImgEcaille}%)`}}>
        <div className="flake_left" style={{transform: `translateX(${translateXLeftEcaille}%)`}}>
          <img className="flake_left_img" src="/assets/background/scale/pottery.jpg" alt="visions illustration"/>
          <div className="flake_left_content">
            <h4 className="flake_title">Visions</h4>
            <h3 className="flake_subtitle">&lt;user centric&gt;</h3>
          </div>
        </div>
        <div className="flake_right flake_right_offset" style={{transform: `translateX(${translateXRightEcaille}%)`}}>
          <img className="flake_right_img" src="/assets/background/scale/pottery.jpg" alt="digital <experience> illustration"/>
          <div className="flake_right_content">
            <h3 className="flake_title">Méthode</h3>
            <h3 className="flake_subtitle">&lt;experience&gt;</h3>
            <p className="flake_paragraph">
              User expérience réalisée en harmonie avec votre stratégie produit.
              Elle est au centre de la démarche.
              Nos équipes ont cette conception centrée sur les usages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

VisionDigitalComponent.propTypes = {
  translateYImgBackground: PropTypes.string.isRequired,
  translateYImgEcaille: PropTypes.string.isRequired,
  translateXLeftEcaille: PropTypes.string.isRequired,
  translateXRightEcaille: PropTypes.string.isRequired,
  componentHeight: PropTypes.string.isRequired,
  refToSize: PropTypes.func.isRequired
};
