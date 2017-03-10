import React, {Component} from 'react';

class Vision extends Component {
  render() {
    const clearBothStyle = {clear: 'both'};

    return (
      <section className="vision">
        <div className="left">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
              <image mask="url(#scale-mask-opaque-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="img/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="img/background/scale/pottery.jpg"
                     preserveAspectRatio="xMidYMid slice"/>
            </svg>
            <div className="content">
              <h1>Visions</h1>
              <h2>&lt;user centric&gt;</h2>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div className="right">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
              <image mask="url(#scale-mask-transparent-right)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="img/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="content">
              <h1>Digital</h1>
              <h2>&lt;experience&gt;</h2>
              <p>
                User expérience réalisée en harmonie avec votre stratégie produit. Elle est au centre de la démarche. Nos
                équipes ont cette conception centrée sur les usages.
              </p>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
      </section>
    );
  }
}

Vision.propTypes = {};

export const VisionComponent = Vision;
