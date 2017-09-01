import React from 'react';
import PropTypes from 'prop-types';
import Styles from './contact.css';

const Contact = ({
  refFunc0,
  refFunc1,
  componentHeight,
  translateYImgBackground,
  translateYFlakes,
  translateXLeftFlake,
  translateXRightFlake
}) => (
  <section ref={refFunc0} className={Styles.section} style={{height: componentHeight}}>
    <img
      ref={refFunc1}
      src="/assets/background/mountain-night.jpg"
      alt="forest baground image"
      className={Styles.section_img}
      style={{transform: `translateY(${translateYImgBackground}%)`}}
      />
    <div className="flakes_container" style={{transform: `translateY(${translateYFlakes}%)`}}>
      <div className="flake_left" style={{transform: `translateX(${translateXLeftFlake}%)`}}>
        <img className="flake_left_img" src="/assets/flake/digital.png" alt="visions illustration"/>
        <div className="flake_left_content">
          <a href="https://zenika.com" target="_blank" rel="noopener noreferrer">
            <img className={Styles.logo_zenika} src="/assets/logo/logo-zenika.svg" alt="Logo Zenika"/>
          </a>
          <a href="https://twitter.com/AyaExperience" className={Styles.logo_twitter_container} target="_blank" rel="noopener noreferrer">
            <i className={Styles.logo_twitter} aria-hidden="true"/>
          </a>
          <a href="https://medium.com/aya-experience" className={Styles.logo_medium_container} target="_blank" rel="noopener noreferrer">
            <img className={Styles.logo_medium} src="/assets/logo/logo-medium.svg" alt="Logo medium"/>
          </a>
          <a href="https://fr.linkedin.com/company/zenika" target="_blank" rel="noopener noreferrer">
            <i className={Styles.logo_linkedin} aria-hidden="true"/>
          </a>
        </div>
      </div>
      <div className="flake_right" style={{transform: `translateX(${translateXRightFlake}%)`}}>
        <img className="flake_right_img" src="/assets/flake/digital.png" alt="digital <experience> illustration"/>
        <div className="flake_right_content">
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
        </div>
      </div>
    </div>
  </section>
);

Contact.propTypes = {
  refFunc0: PropTypes.func.isRequired,
  refFunc1: PropTypes.func.isRequired,
  componentHeight: PropTypes.string.isRequired,
  translateYImgBackground: PropTypes.string.isRequired,
  translateYFlakes: PropTypes.string.isRequired,
  translateXLeftFlake: PropTypes.string.isRequired,
  translateXRightFlake: PropTypes.string.isRequired
};

export const ContactComponent = Contact;
