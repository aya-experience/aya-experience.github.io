import React from 'react';
import {FlakeGroupContainer} from '../../commons/flakes-group/flake-group.container';
import Styles from './consulting-training.css';

export const ConsultingTrainingComponent = () => {
  return (
    <FlakeGroupContainer id="2" className={Styles.section} none>
      <img
        src="/assets/background/ass.jpg"
        alt="forest baground"
        className="flakes_background_parralax_img"
        />

      <div>
        <img className="flake_left_img" src="/assets/flake/digital.png" alt="visions illustration"/>
        <div className="flake_left_content">
          <h4 className="flake_title">Conseil</h4>
        </div>
      </div>

      <div>
        <img className="flake_right_img" src="/assets/flake/digital.png" alt="digital <experience> illustration"/>
        <div className="flake_right_content">
          <h3 className="flake_title">Formation</h3>
          <h3 className="flake_subtitle">&lt;Zenika training&gt;</h3>
        </div>
      </div>
    </FlakeGroupContainer>
  );
};

ConsultingTrainingComponent.propTypes = {};
