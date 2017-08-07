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

    <g className={Styles.a}>
      <path d="M 38,0 0,90 2,90 40,0 Z">
        <CAnimate
          animate={animate}
          id="a_bar_left_annim"
          attributeType="XML"
          attributeName="d"
          from="M 0,90 0,90 2,90 2,90 Z"
          to="M 38,0 0,90 2,90 40,0 Z"
          dur="1s"
          repeatCount="1"
          />
      </path>
      <path d="M 40,0 38,0 78,90 80,90 Z">
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 40,0 38,0 38,0 40,0 Z"
          to="M 40,0 38,0 78,90 80,90 Z"
          dur="1s"
          begin="a_bar_left_annim.end"
          repeatCount="1"
          />
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 40,0 40,0 40,0 40,0 Z"
          to="M 40,0 40,0 40,0 40,0 Z"
          dur="1s"
          repeatCount="1"
          />
      </path>

      <path d="M 14,58 13,60 65,60 64,58 Z">
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 14,58 13,60 14,60 13,58 Z"
          to="M 14,58 13,60 65,60 64,58 Z"
          dur="1.5s"
          begin="a_bar_left_annim.begin+0.3s"
          repeatCount="1"
          />
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 14,60 14,60 14,60 14,60 Z"
          to="M 14,60 14,60 14,60 14,60 Z"
          dur="0.3s"
          repeatCount="1"
          />
      </path>
    </g>
    <g className={Styles.y}>
      <path d="M 73,0 75,0 107,50 105,50 Z">
        <CAnimate
          animate={animate}
          id="y_bar_left_annim"
          attributeType="XML"
          attributeName="d"
          from="M 73,0 75,0 75,0 73,0 Z"
          to="M 73,0 75,0 107,50 105,50 Z"
          dur="0.5s"
          begin="a_bar_left_annim.end"
          repeatCount="1"
          />
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 73,0 75,0 75,0 73,0 Z"
          to="M 73,0 75,0 75,0 73,0 Z"
          dur="1s"
          repeatCount="1"
          />
      </path>
      <path d="M 142,0 140,0 105,50 107,50 Z">
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 142,0 140,0 140,0 142,0 Z"
          to="M 142,0 140,0 105,50 107,50 Z"
          dur="0.5s"
          begin="a_bar_left_annim.end"
          repeatCount="1"
          />
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 142,0 140,0 140,0 142,0 Z"
          to="M 142,0 140,0 140,0 142,0 Z"
          dur="1s"
          repeatCount="1"
          />
      </path>
      <path d="M 105,50 107,50 107,100 105,100 Z">
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 105,50 107,50 107,50 105,50 Z"
          to="M 105,50 107,50 107,100 105,100 Z"
          dur="0.5s"
          begin="y_bar_left_annim.end"
          repeatCount="1"
          />
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 105,50 107,50 107,50 105,50 Z"
          to="M 105,50 107,50 107,50 105,50 Z"
          dur="1.5s"
          repeatCount="1"
          />
      </path>
    </g>

    <g className={Styles.a_final}>
      <path d="M 176,0 139,90 141,90 178,0 Z">
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 176,0 176,00 178,00 178,0 Z"
          to="M 176,0 139,90 141,90 178,0 Z"
          dur="1s"
          begin="a2_bar_right_annim.end"
          repeatCount="1"
          />
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 139,0 139,0 141,0 141,0 Z"
          to="M 139,0 139,0 141,0 141,0 Z"
          dur="1s"
          repeatCount="1"
          />
      </path>
      <path d="M 178,0 176,0 213,90 215,90 Z">
        <CAnimate
          animate={animate}
          id="a2_bar_right_annim"
          attributeType="XML"
          attributeName="d"
          from="M 215,90 213,90 213,90 215,90 Z"
          to="M 178,0 176,0 213,90 215,90 Z"
          dur="1s"
          repeatCount="1"
          />
      </path>

      <path d="M 154,58 153,60 201,60 200,58 Z">
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 200,58 201,60 201,60 200,58 Z"
          to="M 154,58 153,60 201,60 200,58 Z"
          dur="1.5s"
          begin="a2_bar_right_annim.begin+0.3s"
          repeatCount="1"
          />
        <CAnimate
          animate={animate}
          attributeType="XML"
          attributeName="d"
          from="M 200,58 201,60 201,60 200,58 Z"
          to="M 200,58 201,60 201,60 200,58 Z"
          dur="0.3s"
          repeatCount="1"
          />
      </path>
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
