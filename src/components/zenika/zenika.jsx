import React, {Component} from 'react';

class Zenika extends Component {
  render() {
    return (
      <section className="zenika">
        <div className="logo row">
          <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
            <img src="/assets/logo-zenika-red-320.png" alt="Logo Zenika" />
          </div>
        </div>
        <div className="description row">
          <div
            className="col-lg-6 col-lg-offset-3 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0">
            <p>
              AYA &lt;creative experience&gt; est une nouvelle agence réunissant les experts du digital du groupe Zenika
              reconnu pour son expertise technique.
              La création de cette agence permet ainsi d'intervenir sur les projets de bout en bout avec une équipe
              adaptéee...
            </p>
          </div>
        </div>
      </section>
    );
  }
}

Zenika.propTypes = {};

export const ZenikaComponent = Zenika;
