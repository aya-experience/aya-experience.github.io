import React, {Component} from 'react';

class Method extends Component {
  render() {
    const clearBothStyle = {clear: 'both'};

    return (
      <section className="method">
        <div className="left">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
              <image mask="url(#scale-mask-opaque-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/background/scale/man.jpg"
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
              <h1>Méthode</h1>
              <h2>&lt;user story&gt;</h2>
              <p>
                Analyser, conseiller, accompagner votre stratégie dans votre environnement. Du concept à la réalisation,
                chaque étape est optimisée par ces méthodes.
              </p>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
      </section>
    );
  }
}

Method.propTypes = {};

export const MethodComponent = Method;
