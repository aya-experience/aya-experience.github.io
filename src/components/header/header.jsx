import React, {Component} from 'react';

import Styles from './header.css';

class Header extends Component {
  render() {

    return (
      <div className={`${Styles.palm_background} ${Styles.palm_background_full_size}`}>
        <header>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-lg-offset-3 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
                <h1 className={Styles.logo}>
                  <img src="/assets/logo-aya-shadow2.png" alt="Logo AYA" className={Styles.logoImg} />
                </h1>
                <h2>&lt;Code & Design&gt;</h2>
                <p className={Styles.description}>
                  Nous explorons les expériences sous tous leurs axes.
                  Cette nouvelle agence du groupe Zenika permet d'intervenir sur les projets de bout en bout avec des collaborateurs experts omnicanal.
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {};

export const HeaderComponent = Header;
