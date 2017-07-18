import React from 'react';

import Page from '../Page';
import Styles from './index.css';

import {HeaderContainer} from './header/header.container';
import {VisionDigitalContainer} from './vision-digital/vision-digital.container';
import {ConsultingTrainingContainer} from './consulting-training/consulting-training.container';
/* Import {QualityMethodContainer} from './quality-method/quality-method.container';
import {AyaSchemaContainer} from './aya-schema/aya-schema.container';
import {MethodSchemaContainer} from './method-schema/method-schema.container';
import {CodeDesignContainer} from './code-design/code-design.container';
import {ZenikaComponent} from './zenika/zenika';
import {ContactContainer} from './contact/contact.container';
import {Footer} from './footer/footer';
*/

export const Homepage = ({...props}) => (
  <Page {...props} className={Styles.homepage_container}>
    <div className="parallax">
      <HeaderContainer/>
      <VisionDigitalContainer/>

      {/* <QualityMethodContainer/>

          <AyaSchemaContainer/>

          <MethodSchemaContainer/>

          <CodeDesignContainer/> */}

      <ConsultingTrainingContainer/>
      {/*
          <ZenikaComponent/>

          <ContactContainer/>

          <Footer/> */}
    </div>
  </Page>
);

Homepage.propTypes = {};
