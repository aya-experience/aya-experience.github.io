import React, {Component} from 'react';

import Styles from './vision.css';

class Vision extends Component {
  render() {
    const clearBothStyle = {clear: 'both'};

    return (
      <section className={Styles.vision}>
        <div className="section_left">
          <div className="section_scale_left">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
              <image mask="url(#scale-mask-opaque-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/background/scale/pottery.jpg"
                     preserveAspectRatio="xMidYMid slice"/>
            </svg>
            <div className="section_left_content section_scale_content">
              <h1 className="section_scale_content_h1">Visions</h1>
              <h2 className="section_scale_content_h2">&lt;user centric&gt;</h2>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div className="section_right">
          <div className="section_scale_right">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
              <image mask="url(#scale-mask-transparent-right)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="section_right_content section_scale_content">
              <h1 className="section_scale_content_h1">Digital</h1>
              <h2 className="section_scale_content_h2">&lt;experience&gt;</h2>
              <p className="section_scale_content_p">
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
