import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRouter} from 'react-router';
import {withRefs} from '../../../hoc/withRefs';
import {CodeDesignComponent} from './code-design';
import {goToCodeRealisation, goToDesignRealisation} from '../homepage.action';

const mapDispatchToProps = dispatch => ({
  goToCodeRealisation: router => dispatch(goToCodeRealisation(router)),
  goToDesignRealisation: router => dispatch(goToDesignRealisation(router))
});

const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;
  const scrollPercentage = componentSize && componentSize.top < 600 ? (600 + -componentSize.top) / componentSize.height : 0;

  const translateXLeftFlake = scrollPercentage < 0.30 ? (-Math.max(0, Math.min(100, 100 - (400 * scrollPercentage)))).toFixed(4) :
    scrollPercentage < 0.45 ? (-Math.max(-10, Math.min(0, -10 * ((scrollPercentage - 0.30) / 0.15)))).toFixed(4) :
    scrollPercentage < 0.60 ? (-Math.max(-10, Math.min(0, -10 + (10 * ((scrollPercentage - 0.45) / 0.15))))).toFixed(4) :
    '0';
  const translateXRightFlake = scrollPercentage < 0.60 ? Math.max(0, Math.min(100, 100 - (400 * scrollPercentage))).toFixed(4) :
    scrollPercentage < 0.75 ? Math.max(-10, Math.min(0, -10 * ((scrollPercentage - 0.60) / 0.15))).toFixed(4) :
    scrollPercentage < 0.90 ? Math.max(-10, Math.min(0, -10 + (10 * ((scrollPercentage - 0.75) / 0.15)))).toFixed(4) :
    '0';

  return {
    refFunc0: props.refFunc0,
    refFunc1: props.refFunc1,
    startCodeLinkTransition: state.homepage.startCodeLinkTransition,
    startDesignLinkTransition: state.homepage.startDesignLinkTransition,
    translateXLeftFlake,
    translateXRightFlake,
    isDisplayed3D: state.homepage.isDisplayed3D
  };
};

export const CodeDesignContainer = compose(
    withRefs(1),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
  )(CodeDesignComponent);
