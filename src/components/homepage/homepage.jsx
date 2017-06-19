import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';
import Styles from './index.css';

import {SvgTransparentLeft} from '../commons/svgs/svg-transparent_left.jsx';
import {SvgTransparentRight} from '..//commons/svgs/svg-transparent_right.jsx';
import {SvgOpaqueLeft} from '../commons/svgs/svg-opaque_left.jsx';
import {SvgOpaqueRight} from '../commons/svgs/svg-opaque_right.jsx';
import {HeaderComponent} from './header/header.jsx';
import {VisionComponent} from './vision/vision.jsx';
import {QualityComponent} from './qualite/qualite.jsx';
import {MethodComponent} from './method/method.jsx';
import {CodeComponent} from './code/code.jsx';
import {AyaComponent} from './aya/aya.jsx';
import {ZenikaComponent} from './zenika/zenika.jsx';
import {ContactComponent} from './contact/contact.jsx';
import {Design} from './design/design.jsx';

export class Homepage extends Component {
  componentDidMount() {
    const phenomic = document.querySelector('#phenomic');
    let ticking = false;
    let scrollPosition = 0;
    phenomic.addEventListener('scroll', () => {
      scrollPosition = phenomic.scrollTop;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.props.updateScrollPosition(scrollPosition);
          ticking = false;
        });
      }
      ticking = true;
    });
  }

  render() {
    return (
      <Page {...this.props}>
        <SvgTransparentLeft/>
        <SvgTransparentRight/>
        <SvgOpaqueLeft/>
        <SvgOpaqueRight/>
        <HeaderComponent/>
        <div className={Styles.gradient_separation}/>

        <div className={Styles.forest_background}>
          <VisionComponent/>
          <QualityComponent/>
          <MethodComponent/>
          <div className={Styles.gradient_separation}/>
        </div>

        <div className={Styles.road_background}>
          <CodeComponent/>
          <AyaComponent/>
        </div>

        <div className={Styles.gradient_separation}/>

        <div className={Styles.forest_background}>

          <Design/>

          <ZenikaComponent/>
        </div>

        <div className={Styles.gradient_separation}/>

        <ContactComponent/>
      </Page>
    );
  }
}

Homepage.propTypes = {
  updateScrollPosition: PropTypes.func.isRequired
};
