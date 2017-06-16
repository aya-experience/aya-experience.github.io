import React from 'react';
import Styles from './quality.css';

const Quality = () => {
  const clearBothStyle = {clear: 'both'};

  return (
    <section className={Styles.quality}>
      <div className="section_left">
        <div className="section_scale_left">
          <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
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
              xlinkHref="/assets/background/scale/woman.jpg"
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
            <h1 className="section_scale_content_h1">Qualité</h1>
            <h2 className="section_scale_content_h2">&lt;savoir faire&gt;</h2>
            <p className="section_scale_content_p">
              La qualité est un facteur clé de réussite. Assurer la viabilité du service et ses performances sans
              dénaturer
              le projet. Notre approche est qualitative et quantitative.
            </p>
          </div>
        </div>
        <div style={clearBothStyle}/>
      </div>
    </section>

  );
};

Quality.propTypes = {};

export const QualityComponent = Quality;
