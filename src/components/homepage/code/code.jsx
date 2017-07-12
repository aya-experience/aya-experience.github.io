import React, {Component} from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import Styles from './code.css';
import classNames from 'classnames';

class Code extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initCodeBounce: false,
      initDesignBounce: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const thingToListen = [{
      next: nextProps.startCodeLinkTransition,
      old: this.props.startCodeLinkTransition
    }, {
      next: nextProps.startDesignLinkTransition,
      old: this.props.startDesignLinkTransition
    }, {
      next: nextState.initCodeBounce,
      old: this.state.initCodeBounce
    }, {
      next: nextState.initDesignBounce,
      old: this.state.initDesignBounce
    }];
    return thingToListen.reduce((acc, thingToListen) => {
      return acc || thingToListen.next !== thingToListen.old;
    }, false);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.initCodeBounce && !this.state.initCodeBounce) {
      const codeBtnRec = this.codeBtn.getBoundingClientRect();
      const designBtnRec = this.designBtn.getBoundingClientRect();
      let shouldInitCodeBounce = !nextProps.startCodeLinkTransition && codeBtnRec.top < window.innerHeight && codeBtnRec.bottom > 0;
      let shouldInitDesignBounce = !nextProps.startDesignLinkTransition && designBtnRec.top < window.innerHeight && designBtnRec.bottom > 0;

      // If Code is more centered than design only bounce design
      const btnCodeMid = codeBtnRec.top + ((codeBtnRec.bottom - codeBtnRec.top) * 3 / 4) - window.innerHeight;
      const btnDesignMid = (designBtnRec.top + ((designBtnRec.bottom - designBtnRec.top) * 3 / 4)) - window.innerHeight;
      if (shouldInitCodeBounce && shouldInitDesignBounce && Math.abs(btnCodeMid) < Math.abs(btnDesignMid)) {
        shouldInitDesignBounce = false;
      } else if (shouldInitCodeBounce && shouldInitDesignBounce) {
        shouldInitCodeBounce = false;
      }
      this.setState({
        initCodeBounce: shouldInitCodeBounce,
        initDesignBounce: shouldInitDesignBounce
      });
      setTimeout(() => {
        this.setState({
          initCodeBounce: false,
          initDesignBounce: false
        });
      }, 5000);
    }
  }

  render() {
    const {
      startCodeLinkTransition,
      startDesignLinkTransition,
      goToCodeRealisation,
      goToDesignRealisation,
      router
    } = this.props;
    const clearBothStyle = {clear: 'both'};

    return (
      <section className={Styles.code}>
        <div>
          <button
            ref={btn => {
              this.codeBtn = btn;
            }}
            onClick={function (e) {
              e.preventDefault();
              console.log('code');
              goToCodeRealisation(router);
            }}
            className={classNames(
              'section_scale_left',
              Styles.code_button,
              {
                [Styles.active]: startCodeLinkTransition,
                [Styles.bounce]: this.state.initCodeBounce
              })}
            >
            <div className={classNames(Styles.code_transistion_smooth, {[Styles.active]: startCodeLinkTransition})}/>
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
            ref={btn => {
              this.designBtn = btn;
            }}
            onClick={function (e) {
              e.preventDefault();
              goToDesignRealisation(router);
            }}
            className={classNames(
              'section_scale_right',
              Styles.design_button,
              {
                [Styles.active]: startDesignLinkTransition,
                [Styles.bounce]: true || this.state.initDesignBounce
              }
            )}
            >
            <div className={classNames(Styles.design_transistion_smooth, {[Styles.active]: startDesignLinkTransition})}/>
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
  }
}

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
