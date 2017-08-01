import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';
import Styles from './index.css';

import {HeaderContainer} from './header/header.container';
import {VisionDigitalContainer} from './vision-digital/vision-digital.container';
import {QualityMethodContainer} from './quality-method/quality-method.container';
import {AyaSchemaContainer} from './aya-schema/aya-schema.container';
import {MethodSchemaContainer} from './method-schema/method-schema.container';
import {CodeDesignContainer} from './code-design/code-design.container';
import {ConsultingTrainingContainer} from './consulting-training/consulting-training.container';
import {ZenikaComponent} from './zenika/zenika';
import {ContactContainer} from './contact/contact.container';
import {Footer} from './footer/footer';

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
        <HeaderContainer/>

        <VisionDigitalContainer/>

        <QualityMethodContainer/>

        <AyaSchemaContainer/>

        <MethodSchemaContainer/>

        <CodeDesignContainer/>

        <ConsultingTrainingContainer/>

        <ZenikaComponent/>

        <ContactContainer/>

        <Footer/>
      </Page>
    );
  }
}

Homepage.propTypes = {
  updateScrollPosition: PropTypes.func.isRequired
};
