import React, {Component} from 'react';

class Contact extends Component {
  render() {
    const clearBothStyle = {clear: 'both'};

    return (
      <section className="contact no-margin">
        <div className="left">
          <div className="scale">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
              <image mask="url(#scale-mask-opaque-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="img/pixel-black.png"
                     preserveAspectRatio="xMinYMin slice"/>
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="img/background/scale/vegetal.jpg"
                     preserveAspectRatio="xMidYMid slice"/>
            </svg>
            <div className="content">
              <a href="https://twitter.com/AyaExperience" target="_blank">
                <i className="icon-twitter" aria-hidden="true"></i>
              </a>
              <a href="http://zenika.com" target="_blank">
                <img className="logo" src="img/logo-zenika-white-60.png" alt="Logo Zenika" />
              </a>
              <a href="https://fr.linkedin.com/company/zenika" target="_blank">
                <i className="icon-linkedin" aria-hidden="true"></i>
              </a>
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
              <h1>Contact</h1>
              <p>
                <a href="mailto:contact@aya-experience.com">
                  contact@aya-experience.com
                </a>
                <br/>
                <a href="tel:+33145261915">
                  01 45 26 19 15
                </a>
                <br/>
                <a href="http://www.zenika.com/Evenements/evenements-all.html" target="_blank">
                  &lt;AGENDA&gt; <i className="external-link" aria-hidden="true"></i>
                </a>
                <br/>
                <a href="http://jobs.zenika.com/" target="_blank">
                  &lt;JOBS&gt; <i className="external-link" aria-hidden="true"></i><br/>
                </a>
              </p>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div className="logo row">
          <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
            <img src="img/logo-aya-shadow2.png" alt="Logo AYA" />
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {};

export const ContactComponent = Contact;
