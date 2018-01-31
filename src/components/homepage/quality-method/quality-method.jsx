import React from 'react';
import Styles from './quality-method.css';
import {FlakeGroupContainer} from '../../commons/flakes-group/flake-group.container';

export const QualityMethodComponent = () => {
  return (
    <FlakeGroupContainer className={Styles.section} noParralaxForBackground debug>
      <img
        src="/assets/background/hand-join.jpg"
        alt="hand join background"
        className="flakes_background_parralax_img"
        />

      <div>
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

      <div>
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
    </FlakeGroupContainer>
  );
};

QualityMethodComponent.propTypes = {};
