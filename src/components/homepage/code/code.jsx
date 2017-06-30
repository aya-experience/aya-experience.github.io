import React from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import Styles from './code.css';
import classNames from 'classnames';

const Code = ({
  startCodeLinkTransition,
  startDesignLinkTransition,
  goToCodeRealisation,
  goToDesignRealisation,
  router
}) => {
  const clearBothStyle = {clear: 'both'};

  return (
    <section className={Styles.code}>
      <div className={classNames(Styles.code_transistion_smooth, {[Styles.active]: startCodeLinkTransition})}/>
      <div className={classNames(Styles.design_transistion_smooth, {[Styles.active]: startDesignLinkTransition})}/>
      <div>
        <button
          onClick={function (e) {
            e.preventDefault();
            console.log('code');
            goToCodeRealisation(router);
          }}
          className={classNames('section_scale_left', Styles.code_button, {[Styles.active]: startCodeLinkTransition})}
          >
          <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
            <image
              mask="url(#scale-mask-transparent-left)"
              width="100%"
              height="100%"
              y="0"
              x="0"
              xlinkHref="/assets/pixel-white.png"
              preserveAspectRatio="xMinYMin slice"
              />
          </svg>
          <div className="section_left_content section_scale_content">
            <div className={Styles.codeContent}>
              <h1 className={Styles.codeTitle}>Code</h1>
              <p className={Styles.codeP}>
              HTML, CSS, JS,<br/>
              React, VueJS, Angular,<br/>
              Node, Php, Java,
            </p>
            </div>
          </div>
        </button>
        <div style={clearBothStyle}/>
      </div>

      <div className="section_right">
        <button
          onClick={function (e) {
            e.preventDefault();
            goToDesignRealisation(router);
          }}
          className={classNames('section_scale_right', Styles.design_button, {[Styles.active]: startDesignLinkTransition})}
          >
          <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
            <image
              mask="url(#scale-mask-transparent-right)"
              width="100%"
              height="100%"
              y="0"
              x="0"
              xlinkHref="/assets/pixel-white.png"
              preserveAspectRatio="xMinYMin slice"
              />
          </svg>
          <div className="section_right_content section_scale_content">
            <div className={Styles.designContent}>
              <h1 className={Styles.designTitle}>Design</h1>
              <p className={Styles.designP}>
              UX, UI, Visual Design,<br/>
              Motion Design, Branding<br/>
              Communication
              </p>
            </div>
          </div>
        </button>
        <div style={clearBothStyle}/>
      </div>
      <div style={clearBothStyle}/>
    </section>
  );
};

Code.propTypes = {
  startCodeLinkTransition: PropTypes.bool.isRequired,
  startDesignLinkTransition: PropTypes.bool.isRequired,
  goToCodeRealisation: PropTypes.func.isRequired,
  goToDesignRealisation: PropTypes.func.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export const CodeComponent = withRouter(Code);
