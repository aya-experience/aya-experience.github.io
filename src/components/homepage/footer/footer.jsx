import React from 'react';
import Styles from './footer.css';

export const Footer = () => {
  return (
    <section className={Styles.section}>
      <img className={Styles.flake} src="/assets/flake/colored.svg" alt="Ecailles en couleurs"/>
    </section>
  );
};
