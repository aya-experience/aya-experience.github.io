import React from 'react';
import PropTypes from 'prop-types';
import Styles from './consulting-training.css';

export const ConsultingTrainingComponent = ({
  refFunc0,
  refFunc1,
  componentHeight,
  translateYImgBackground,
  translateYFlakes,
  translateXLeftFlake,
  translateXRightFlake
}) => {
  return (
    <section ref={refFunc0} className={Styles.section} style={{height: componentHeight}}>
      <img
        ref={refFunc1}
        src="/assets/background/ass.jpg"
        alt="forest baground image"
        className={Styles.section_img}
        style={{transform: `translateY(${translateYImgBackground}%)`}}
        />
      <div className="flakes_container" style={{transform: `translateY(${translateYFlakes}%)`}}>
        <div className="flake_left" style={{transform: `translateX(${translateXLeftFlake}%)`}}>
          <img className="flake_left_img" src="/assets/flake/digital.png" alt="visions illustration"/>
          <div className="flake_left_content">
            <h4 className="flake_title">Conseil</h4>
          </div>
        </div>
        <div className="flake_right" style={{transform: `translateX(${translateXRightFlake}%)`}}>
          <img className="flake_right_img" src="/assets/flake/digital.png" alt="digital <experience> illustration"/>
          <div className="flake_right_content">
            <h3 className="flake_title">Formation</h3>
            <h3 className="flake_subtitle">&lt;Zenika training&gt;</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

ConsultingTrainingComponent.propTypes = {
  refFunc0: PropTypes.func.isRequired,
  refFunc1: PropTypes.func.isRequired,
  componentHeight: PropTypes.string.isRequired,
  translateYImgBackground: PropTypes.string.isRequired,
  translateYFlakes: PropTypes.string.isRequired,
  translateXLeftFlake: PropTypes.string.isRequired,
  translateXRightFlake: PropTypes.string.isRequired
};
