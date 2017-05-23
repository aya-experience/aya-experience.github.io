import React, {Component} from 'react';

import Styles from './code.css';

class Code extends Component {
  render() {
    const clearBothStyle = {clear: 'both'};

    return (
      <section className={Styles.code}>
        <div className="section_left">
          <div className="section_scale_left">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-white.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="section_left_content section_scale_content">
              <div className={Styles.codeContent}>
                <h1 className={Styles.codeTitle}>Code</h1>
                <p className={Styles.codeP}>
                  HTML, CSS, JS,<br/>
                  jQuery, Angular 1 & 2, React,<br/>
                  Php, Java, Node
                </p>
              </div>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div className="section_right">
          <div className="section_scale_right">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
              <image mask="url(#scale-mask-transparent-right)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-white.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="section_right_content section_scale_content">
              <div className={Styles.designContent}>
                <h1 className={Styles.designTitle}>Design</h1>
                <p className={Styles.designP}>
                  UX, UI, Visual Design,<br/>
                  Motion Design, Branding<br/>
                  Communication
                </p>
              </div>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div style={clearBothStyle}></div>
      </section>
    );
  }
}

Code.propTypes = {};

export const CodeComponent = Code;
