import React from 'react';
import PropTypes from 'prop-types';
import Styles from './quality-method.css';

export const QualityMethodComponent = ({refFunc0, translateYImgBackground, componentHeight, translateYImgEcaille, translateXLeftEcaille, translateXRightEcaille}) => {
  return (
    <section ref={refFunc0} className={Styles.section} style={{height: componentHeight}}>
      <img
        src="/assets/background/road.jpg"
        alt="forest baground image"
        className={Styles.section_img}
        style={{transform: `translateY(${translateYImgBackground}%)`}}
        />
      <div className="flakes_container flakes_container_offset" style={{transform: `translateY(${translateYImgEcaille}%)`}}>
        <div className="flake_left" style={{transform: `translateX(${translateXLeftEcaille}%)`}}>
          <img className="flake_left_img" src="/assets/background/scale/pottery.jpg" alt="visions illustration"/>
          <div className="flake_left_content">
            <h3 className="flake_title">Qualité</h3>
            <h4 className="flake_subtitle">&lt;savoir faire&gt;</h4>
            <p className="flake_paragraph">
              La qualité est un facteur clé de réussite. Assurer la viabilité du service et ses performances sans
              dénaturer
              le projet. Notre approche est qualitative et quantitative.
            </p>
          </div>
        </div>
        <div className="flake_right flake_right_offset" style={{transform: `translateX(${translateXRightEcaille}%)`}}>
          <img className="flake_right_img" src="/assets/background/scale/pottery.jpg" alt="digital <experience> illustration"/>
          <div className="flake_right_content">
            <h3 className="flake_title">Digital</h3>
            <h3 className="flake_subtitle">&lt;user story&gt;</h3>
            <p className="flake_paragraph">
              Analyser, conseiller, accompagner votre stratégie dans votre environnement. Du concept à la réalisation,
              chaque étape est optimisée par ces méthodes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

QualityMethodComponent.propTypes = {
  translateYImgBackground: PropTypes.string.isRequired,
  translateYImgEcaille: PropTypes.string.isRequired,
  translateXLeftEcaille: PropTypes.string.isRequired,
  translateXRightEcaille: PropTypes.string.isRequired,
  componentHeight: PropTypes.string.isRequired,
  refFunc0: PropTypes.func.isRequired
};
