import React from 'react';
import PropTypes from 'prop-types';
import Styles from './vision-digital.css';

export const VisionDigitalComponent = ({translateYImgBackground, componentHeight, refFunc0, refFunc1, translateYFlakes, translateXLeftFlake, translateXRightFlake}) => {
  return (
    <section ref={refFunc0} className={Styles.vision} style={{height: componentHeight}}>
      <img
        ref={refFunc1}
        src="/assets/background/spark-light.jpg"
        alt="forest baground image"
        className={Styles.vision_img}
        style={{transform: `translateY(${translateYImgBackground}%)`}}
        />
      <div className="flakes_container" style={{transform: `translateY(${translateYFlakes}%)`}}>
        <div className="flake_left" style={{transform: `translateX(${translateXLeftFlake}%)`}}>
          <img className="flake_left_img" src="/assets/flake/digital.png" alt="visions illustration"/>
          <div className="flake_left_content">
            <h4 className="flake_title">Visions</h4>
            <h3 className="flake_subtitle">&lt;user centric&gt;</h3>
          </div>
        </div>
        <div className="flake_right" style={{transform: `translateX(${translateXRightFlake}%)`}}>
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
      </div>
    </section>
  );
};

VisionDigitalComponent.propTypes = {
  translateYImgBackground: PropTypes.string.isRequired,
  translateYFlakes: PropTypes.string.isRequired,
  translateXLeftFlake: PropTypes.string.isRequired,
  translateXRightFlake: PropTypes.string.isRequired,
  componentHeight: PropTypes.string.isRequired,
  refFunc0: PropTypes.func.isRequired,
  refFunc1: PropTypes.func.isRequired
};
