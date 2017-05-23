import React from "react"

import Page from "../Page"
import Styles from './index.css';

import {SvgTransparentLeft} from '../../components/svgs/svg-transparent_left.jsx';
import {SvgTransparentRight} from '../../components/svgs/svg-transparent_right.jsx';
import {SvgOpaqueLeft} from '../../components/svgs/svg-opaque_left.jsx';
import {SvgOpaqueRight} from '../../components/svgs/svg-opaque_right.jsx';
import {HeaderComponent} from '../../components/header/header.jsx';
import {VisionComponent} from '../../components/vision/vision.jsx';
import {QualityComponent} from '../../components/qualite/qualite.jsx';
import {MethodComponent} from '../../components/method/method.jsx';
import {CodeComponent} from '../../components/code/code.jsx';
import {AyaComponent} from '../../components/aya/aya.jsx';
import {ZenikaComponent} from '../../components/zenika/zenika.jsx';
import {ContactComponent} from '../../components/contact/contact.jsx';
import {Design} from '../../components/design/design.jsx';

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <SvgTransparentLeft />
      <SvgTransparentRight />
      <SvgOpaqueLeft />
      <SvgOpaqueRight />
      <HeaderComponent />
      <div className={Styles.gradient_separation}></div>

      <div className={Styles.forest_background}>
        <VisionComponent />
        <QualityComponent />
        <MethodComponent />
        <div className={Styles.gradient_separation}></div>
      </div>

      <div className={Styles.road_background}>
        <CodeComponent />
        <AyaComponent />
      </div>

      <div className={Styles.gradient_separation}></div>

      <div className={Styles.forest_background}>

        <Design />

        <ZenikaComponent />
      </div>

      <div className={Styles.gradient_separation}></div>

      <ContactComponent />
    </Page>
  )
}

export default Homepage
