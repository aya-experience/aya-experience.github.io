import React from 'react';
import Styles from './contact.css';
import {FlakeGroupContainer} from '../../commons/flakes-group/flake-group.container';

const Contact = () => (
  <FlakeGroupContainer className={Styles.section}>
    <img
      src="/assets/background/mountain-night.jpg"
      alt="forest baground image"
      className="flakes_background_parralax_img"
      />

    <div>
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

    <div>
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
  </FlakeGroupContainer>
);

Contact.propTypes = {};

export const ContactComponent = Contact;
