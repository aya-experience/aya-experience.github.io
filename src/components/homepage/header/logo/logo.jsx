import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from './logo.css';
import {CAnimate} from './animations/CAnimate';

export const Logo = ({animate, className}) => (
  <svg className={classNames({[Styles.animate]: animate}, Styles.container, className)} viewBox="0 0 215 175">
    <title>AYA - &lt;Creative experience&gt;</title>
    <filter id="box-shadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2.2"/>
      <feOffset dx="0" dy="0" result="offsetblur"/>
      <feFlood floodColor="rgba(0,0,0,0.5)"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <g className={Styles.a_left}>
      <path className={Styles.a_bar_left}/>
      <path className={Styles.a_bar_right}/>
      <path className={Styles.a_bar_middle}/>
    </g>
    <g className={Styles.y}>
      <path className={Styles.y_bar_left}/>
      <path className={Styles.y_bar_right}/>
      <path className={Styles.y_bar_middle}/>
    </g>

    <g className={Styles.a_right}>
      <path className={Styles.a_bar_left}/>
      <path className={Styles.a_bar_right}/>
      <path className={Styles.a_bar_middle}/>
    </g>

    <g className={Styles.creative_experience}>
      <image xlinkHref="/assets/logo/aya/creative.png" x="14" y="135" height="18"/>
      <image xlinkHref="/assets/logo/aya/x@2x.png" x="77" y="110" width="60" height="60"/>
      <image xlinkHref="/assets/logo/aya/perience.png" x="125" y="135" height="18"/>
      <CAnimate
        animate={animate}
        attributeName="opacity"
        from="0"
        to="0"
        dur="2s"
        repeatCount="1"
        />
      <CAnimate
        animate={animate}
        attributeName="opacity"
        from="0"
        to="1"
        dur="0.5s"
        begin="2s"
        repeatCount="1"
        />
    </g>
  </svg>
);

Logo.defaultProps = {
  animate: false
};

Logo.propTypes = {
  animate: PropTypes.bool,
  className: PropTypes.string.isRequired
};
