import React from 'react';
import Styles from './method.css';

const Method = () => {
  const clearBothStyle = {clear: 'both'};

  return (
    <section className={Styles.method}>
      <div className="section_left">
        <div className="section_scale_left">
          <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
            <image
              mask="url(#scale-mask-opaque-left)"
              width="100%"
              height="100%"
              y="0"
              x="0"
              xlinkHref="/assets/pixel-black.png"
              preserveAspectRatio="xMinYMin slice"
              />
            <image
              mask="url(#scale-mask-transparent-left)"
              width="100%"
              height="100%"
              y="0"
              x="0"
              xlinkHref="/assets/background/scale/man.jpg"
              preserveAspectRatio="xMidYMid slice"
              />
          </svg>
          <div className="section_left_content section_scale_content"/>
        </div>
        <div style={clearBothStyle}/>
      </div>
      <div className="section_right">
        <div className="section_scale_right">
          <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
            <image
              mask="url(#scale-mask-transparent-right)"
              width="100%"
              height="100%"
              y="0"
              x="0"
              xlinkHref="/assets/pixel-black.png"
              preserveAspectRatio="xMinYMin slice"
              />
          </svg>
          <div className="section_right_content section_scale_content">
            <h1 className="section_scale_content_h1">Méthode</h1>
            <h2 className="section_scale_content_h2">&lt;user story&gt;</h2>
            <p className="section_scale_content_p">
              Analyser, conseiller, accompagner votre stratégie dans votre environnement. Du concept à la réalisation,
              chaque étape est optimisée par ces méthodes.
            </p>
          </div>
        </div>
        <div style={clearBothStyle}/>
      </div>
    </section>
  );
};

Method.propTypes = {};

export const MethodComponent = Method;
