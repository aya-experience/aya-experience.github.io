import React, {Component} from 'react';

class Quality extends Component {
  render() {
    const clearBothStyle = {clear: 'both'};

    return (
      <section className="quality">
        <div className="left">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
              <image mask="url(#scale-mask-opaque-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/background/scale/woman.jpg"
                     preserveAspectRatio="xMidYMid slice"/>
            </svg>
            <div className="content">
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div className="right">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
              <image mask="url(#scale-mask-transparent-right)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="content">
              <h1>Qualité</h1>
              <h2>&lt;savoir faire&gt;</h2>
              <p>
                La qualité est un facteur clé de réussite. Assurer la viabilité du service et ses performances sans
                dénaturer
                le projet. Notre approche est qualitative et quantitative.
              </p>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
      </section>

    );
  }
}

Quality.propTypes = {};

export const QualityComponent = Quality;
