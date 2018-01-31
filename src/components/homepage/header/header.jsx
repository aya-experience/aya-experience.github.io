import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Logo} from './logo/logo';
import Styles from './header.css';

const Header = ({paragraphOpacity, translateYLogo, scaleCodeDesign, isDisplayed3D}) => (
  <header className={classNames('flakes_group_parralax', {paralax3d: isDisplayed3D}, Styles.header)}>
    <div className={`flakes_background_parralax ${Styles.header_background}`}/>
    <div className={`flakes_container_parralax ${Styles.container}`}>
      <h1 className={Styles.logo} style={{transform: `translateY(${translateYLogo}%)`}}>
        <Logo className={Styles.logo_img} animate/>
      </h1>
      <p className={Styles.description} style={{opacity: paragraphOpacity}}>
        Nous plaçons vos utilisateurs au centre
        de la conception de votre produit.
        Nous leurs apportons la meilleure des expériences
        à travers notre double expertise
      </p>
      <h2 className={Styles.tagline} style={{transform: `scale(${scaleCodeDesign})`}}>&lt;Code & Design&gt;</h2>
    </div>
  </header>
);

Header.propTypes = {
  paragraphOpacity: PropTypes.string.isRequired,
  translateYLogo: PropTypes.string.isRequired,
  scaleCodeDesign: PropTypes.string.isRequired,
  isDisplayed3D: PropTypes.bool.isRequired
};

export const HeaderComponent = Header;
