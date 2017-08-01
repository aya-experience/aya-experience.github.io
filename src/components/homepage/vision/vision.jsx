import React from 'react';
import PropTypes from 'prop-types';
import Styles from './vision.css';

export const VisionComponent = ({translateYImgBackground, componentHeight, refToSize, translateYImgEcaille, translateXLeftEcaille, translateXRightEcaille}) => {
  return (
    <section ref={refToSize} className={Styles.vision} style={{height: componentHeight}}>
      <img
        src="/assets/background/palms.jpg"
        alt="forest baground image"
        className={Styles.vision_img}
        style={{transform: `translateY(${translateYImgBackground}%)`}}
        />
      <div className={`${Styles.ecailles_container} ${Styles.ecailles_container_offset}`} style={{transform: `translateY(${translateYImgEcaille}%)`}}>
        <div className={Styles.ecaille_left} style={{transform: `translateX(${translateXLeftEcaille}%)`}}>
          <img className={Styles.ecaille_left_img} src="/assets/background/scale/pottery.jpg" alt="visions illustration"/>
          <div className={Styles.ecaille_left_content}>
            <h4 className={Styles.ecaille_title}>Visions</h4>
            <h3 className={Styles.ecaille_subtitle}>&lt;user centric&gt;</h3>
          </div>
        </div>
        <div className={`${Styles.ecaille_right} ${Styles.ecaille_right_offset}`} style={{transform: `translateX(${translateXRightEcaille}%)`}}>
          <img className={Styles.ecaille_right_img} src="/assets/background/scale/pottery.jpg" alt="digital <experience> illustration"/>
          <div className={Styles.ecaille_right_content}>
            <h3 className={Styles.ecaille_title}>Digital</h3>
            <h3 className={Styles.ecaille_subtitle}>&lt;experience&gt;</h3>
            <p className={Styles.ecaille_paragraph}>
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

VisionComponent.propTypes = {
  translateYImgBackground: PropTypes.number.isRequired,
  translateYImgEcaille: PropTypes.number.isRequired,
  translateXLeftEcaille: PropTypes.number.isRequired,
  translateXRightEcaille: PropTypes.number.isRequired,
  componentHeight: PropTypes.string.isRequired,
  refToSize: PropTypes.func.isRequired
};
