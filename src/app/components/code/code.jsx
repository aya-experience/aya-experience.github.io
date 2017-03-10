import React, {Component} from 'react';

class Code extends Component {
  render() {
    const clearBothStyle = {clear: 'both'};

    return (
      <section className="code no-margin">
        <div className="left">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="img/pixel-white.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="content">
              <h1></h1>
              <p>
                HTML, CSS, JS,<br/>
                jQuery, Angular 1 & 2, React,<br/>
                Php, Java, Node
              </p>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div className="right">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
              <image mask="url(#scale-mask-transparent-right)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="img/pixel-white.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="content">
              <h1></h1>
              <p>
                UX, UI, Visual Design,<br/>
                Motion Design, Branding<br/>
                Communication
              </p>
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
