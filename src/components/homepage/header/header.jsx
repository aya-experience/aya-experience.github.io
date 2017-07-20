import React from 'react';
import {Logo} from './logo/logo';
import Styles from './header.css';

const Header = () => (
  <header className={Styles.header}>
    <h1 className={Styles.logo}>
      <Logo className={Styles.logo_img} animate/>
    </h1>
    <p className={Styles.description}>
      Nous plaçons vos utilisateurs au centre
      de la conception de votre produit.
      Nous leurs apportons la meilleure des expériences
      à travers notre double expertise
    </p>
    <h2 className={Styles.tagline}>&lt;Code & Design&gt;</h2>
  </header>
);

Header.propTypes = {};

export const HeaderComponent = Header;
