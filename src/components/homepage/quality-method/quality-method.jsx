import React from 'react';
import PropTypes from 'prop-types';
import Styles from './quality-method.css';

export const QualityMethodComponent = ({
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
        src="/assets/background/hand-join.jpg"
        alt="mountain baground image"
        className={Styles.section_img}
        style={{transform: `translateY(${translateYImgBackground}%)`}}
        />
      <div className="flakes_container" style={{transform: `translateY(${translateYFlakes}%)`}}>
        <div className="flake_left" style={{transform: `translateX(${translateXLeftFlake}%)`}}>
          <img className="flake_left_img" src="/assets/flake/digital.png" alt="visions illustration"/>
          <div className="flake_left_content">
            <h3 className="flake_title">Qualité</h3>
            <h4 className="flake_subtitle">&lt;savoir faire&gt;</h4>
            <p className="flake_paragraph">
              La qualité est un facteur clé de réussite.
              Assurer la viabilité du service et ses performances sans dénaturer le projet.
              Notre approche est qualitative et quantitative.
            </p>
          </div>
        </div>
        <div className="flake_right" style={{transform: `translateX(${translateXRightFlake}%)`}}>
          <img className="flake_right_img" src="/assets/flake/digital.png" alt="digital <experience> illustration"/>
          <div className="flake_right_content">
            <h3 className="flake_title">Méthode</h3>
            <h3 className="flake_subtitle">&lt;user story&gt;</h3>
            <p className="flake_paragraph">
              Analyser, conseiller, accompagner votre stratégie dans votre environnement.
              Du concept à la réalisation, chaque étape est optimisée par ces méthodes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

QualityMethodComponent.propTypes = {
  translateYImgBackground: PropTypes.string.isRequired,
  translateYFlakes: PropTypes.string.isRequired,
  translateXLeftFlake: PropTypes.string.isRequired,
  translateXRightFlake: PropTypes.string.isRequired,
  componentHeight: PropTypes.string.isRequired,
  refFunc0: PropTypes.func.isRequired,
  refFunc1: PropTypes.func.isRequired
};
