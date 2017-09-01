import React from 'react';
import Styles from './zenika.css';

const Zenika = () => (
  <section className={Styles.zenika}>
    <img className={Styles.logo_img} src="/assets/logo-zenika-red-320.png" alt="Logo Zenika"/>
    <p className={Styles.description}>
        AYA &lt;creative experience&gt; est une nouvelle agence réunissant les experts du digital du groupe Zenika
        reconnu pour son expertise technique.
        La création de cette agence permet ainsi d&apos;intervenir sur les projets de bout en bout avec une équipe
        adaptée...
      </p>
  </section>
);

Zenika.propTypes = {};

export const ZenikaComponent = Zenika;
