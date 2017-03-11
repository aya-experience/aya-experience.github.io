import React, {Component} from 'react';

class Header extends Component {
  render() {
    const imgStyle = {
      width: '100%',
      maxWidth: '400px',
      minHeight: '228px'
    };
    return (
      <div className="palm-background palm-background_full-size">
        <header>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-lg-offset-3 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
                <h1 className="logo">
                  <img src="img/logo-aya-shadow2.png" alt="Logo AYA" style={imgStyle} />
                </h1>
                <h2 className="definition-1">&lt;Code & Design&gt;</h2>
                <p className="description">
                  Nous explorons les expériences sous tous leurs axes. Cette nouvelle agence du groupe Zenika permet
                  d'intervenir sur les projets de bout en bout avec des collaborateurs experts omnicanal.
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
