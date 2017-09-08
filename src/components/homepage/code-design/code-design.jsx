import React from 'react';
import PropTypes from 'prop-types';
import Styles from './code-design.css';
import classNames from 'classnames';

export const CodeDesignComponent = ({
  refFunc0,
  translateXLeftFlake,
  translateXRightFlake,
  startDesignLinkTransition,
  startCodeLinkTransition,
  goToCodeRealisation,
  goToDesignRealisation,
  router,
  isDisplayed3D
}) => (
  <section ref={refFunc0} className={classNames('flakes_group_parralax', {paralax3d: isDisplayed3D}, Styles.section)}>
    <img
      src="/assets/background/building-link.jpg"
      alt="mountain baground image"
      className={classNames('flakes_background_parralax', 'flakes_background_parralax_img')}
      />
    <div className="flakes_container">
      <button
        onClick={e => {
          e.preventDefault();
          goToCodeRealisation(router);
        }}
        className={classNames(
          'flake_left',
          Styles.code_button,
          {[Styles.active]: startCodeLinkTransition}
        )}
        style={{transform: `translateX(${translateXLeftFlake}%)`}}
        >
        <img className="flake_left_img" src="/assets/flake/digital.png" alt="visions illustration"/>
        <div className="flake_left_content">
          <div className={Styles.code_transistion_smooth}/>
          <h3 className="flake_title">Code</h3>
          <p className="flake_paragraph">
            HTML, CSS, JS,<br/>
            React, VueJS, Angular, NodeJS<br/>
            Static WebSite, PWA, AMP
          </p>
        </div>
      </button>
      <button
        onClick={function (e) {
          e.preventDefault();
          goToDesignRealisation(router);
        }}
        className={classNames(
          'flake_right',
          Styles.design_button,
          {[Styles.active]: startDesignLinkTransition}
        )}
        style={{transform: `translateX(${translateXRightFlake}%)`}}
        >
        <img className="flake_right_img" src="/assets/flake/digital.png" alt="digital <experience> illustration"/>
        <div className={Styles.design_transistion_smooth}/>
        <div className="flake_right_content">
          <h3 className="flake_title">Design</h3>
          <p className="flake_paragraph">
            UX, UI, Visual Design,<br/>
            Motion Design, Branding<br/>
            Communication
          </p>
        </div>
      </button>
    </div>
  </section>
);

CodeDesignComponent.propTypes = {
  refFunc0: PropTypes.func.isRequired,
  translateXLeftFlake: PropTypes.string.isRequired,
  translateXRightFlake: PropTypes.string.isRequired,
  startDesignLinkTransition: PropTypes.bool.isRequired,
  startCodeLinkTransition: PropTypes.bool.isRequired,
  goToCodeRealisation: PropTypes.func.isRequired,
  goToDesignRealisation: PropTypes.func.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  isDisplayed3D: PropTypes.bool.isRequired
};
