import React from 'react';
import Styles from './contact.css';

const Contact = () => {
  const clearBothStyle = {clear: 'both'};

  return (
    <section className={Styles.contact}>
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
              xlinkHref="/assets/background/scale/vegetal.jpg"
              preserveAspectRatio="xMidYMid slice"
              />
          </svg>
          <div className="section_left_content section_scale_content">
            <div className={Styles.logoContainer}>
              <a href="https://zenika.com" target="_blank" rel="noopener noreferrer">
                <img className={Styles['logo-zenika']} src="/assets/logo-zenika.png" alt="Logo Zenika"/>
              </a>
              <div className="row">
                <a href="https://twitter.com/AyaExperience" className={Styles['logo-twitter_container']} target="_blank" rel="noopener noreferrer">
                  <i className={Styles['icon-twitter']} aria-hidden="true"/>
                </a>
                <a href="https://medium.com/aya-experience" className={Styles['logo-medium_container']} target="_blank" rel="noopener noreferrer">
                  <img className={Styles['logo-medium']} src="/assets/logo-medium.png" alt="Logo medium"/>
                </a>
              </div>
              <a href="https://fr.linkedin.com/company/zenika" target="_blank" rel="noopener noreferrer">
                <i className={Styles['icon-linkedin']} aria-hidden="true"/>
              </a>
            </div>
          </div>
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
              xlinkHref="/assets/pixel-white.png"
              preserveAspectRatio="xMinYMin slice"
              />
          </svg>
          <div className={`section_right_content section_scale_content ${Styles.contactUs}`}>
            <h1 className={`section_scale_content_h1 ${Styles.contactUsTitle}`}>Contact</h1>
            <p>
              <a href="mailto:contact@aya-experience.com">
                contact@aya-experience.com
              </a>
              <br/>
              <a href="tel:+33145261915">
                01 45 26 19 15
              </a>
              <br/>
              <a href="http://www.zenika.com/Evenements/evenements-all.html" target="_blank" rel="noopener noreferrer">
                &lt;AGENDA&gt; <i className="external-link" aria-hidden="true"/>
              </a>
              <br/>
              <a href="http://jobs.zenika.com/" target="_blank" rel="noopener noreferrer">
                &lt;JOBS&gt; <i className="external-link" aria-hidden="true"/><br/>
              </a>
            </p>
          </div>
        </div>
        <div style={clearBothStyle}/>
      </div>
      <div className={`${Styles['logo-aya']} row`}>
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
          <img src="/assets/logo-aya-shadow2.png" alt="Logo AYA"/>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {};

export const ContactComponent = Contact;
