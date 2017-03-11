import React, {Component} from 'react';

import {SvgTransparentLeft} from './components/svgs/svg-transparent_left.jsx';
import {SvgTransparentRight} from './components/svgs/svg-transparent_right.jsx';
import {SvgOpaqueLeft} from './components/svgs/svg-opaque_left.jsx';
import {SvgOpaqueRight} from './components/svgs/svg-opaque_right.jsx';
import {HeaderComponent} from './components/header/Header.jsx';
import {VisionComponent} from './components/vision/vision.jsx';
import {QualityComponent} from './components/qualite/qualite.jsx';
import {MethodComponent} from './components/method/method.jsx';
import {CodeComponent} from './components/code/code.jsx';
import {AyaComponent} from './components/aya/aya.jsx';
import {ZenikaComponent} from './components/zenika/zenika.jsx';
import {ContactComponent} from './components/contact/contact.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <SvgTransparentLeft />
        <SvgTransparentRight />
        <SvgOpaqueLeft />
        <SvgOpaqueRight />
        <HeaderComponent />
        <div className="gradient-separation"></div>

        <div className="forest-background">
          <VisionComponent />
          <QualityComponent />
          <MethodComponent />
          <div className="gradient-separation"></div>
        </div>

        <div className="road-background">
          <CodeComponent />
          <AyaComponent />
        </div>

        <div className="gradient-separation"></div>

        <div className="forest-background">

          <section className="design">
            <img src="img/scale-colors.svg" alt="Ecailles en couleurs"/>
            <div className="content row">
              <div className="col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 col-xs-6">
                <h1>Design</h1>
              </div>
              <div className="col-md-4 col-sm-5 col-xs-6">
                <h1>Code</h1>
              </div>
            </div>
          </section>

          <ZenikaComponent />
        </div>

        <div className="gradient-separation"></div>

        <ContactComponent />
      </div>
    );
  }
}

App.propTypes = {};

export const AppComponent = App;
