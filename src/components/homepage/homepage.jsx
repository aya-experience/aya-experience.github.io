import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';
import Styles from './index.css';

import {HeaderContainer} from './header/header.container';
import {VisionDigitalContainer} from './vision-digital/vision-digital.container';
import {QualityMethodContainer} from './quality-method/quality-method.container';

import {SvgTransparentLeft} from '../commons/svgs/svg-transparent_left.jsx';
import {SvgTransparentRight} from '..//commons/svgs/svg-transparent_right.jsx';
import {SvgOpaqueLeft} from '../commons/svgs/svg-opaque_left.jsx';
import {SvgOpaqueRight} from '../commons/svgs/svg-opaque_right.jsx';

import {CodeContainer} from './code/code.container';
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
      <Page {...this.props} className={Styles.homepage_container}>
        <SvgTransparentLeft/>
        <SvgTransparentRight/>
        <SvgOpaqueLeft/>
        <SvgOpaqueRight/>

        <HeaderContainer/>

        <VisionDigitalContainer/>

        <QualityMethodContainer/>

        <div className={Styles.road_background}>
          <CodeContainer/>
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
