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

let scaledUpHeight;
const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;
  const imageSize = props.ref1 ? props.ref1.getBoundingClientRect() : null;
  if (imageSize && !scaledUpHeight) {
    scaledUpHeight = imageSize.height * 3;
  }

  const scrollPercentage = scaledUpHeight && componentSize.top < 0 ? -componentSize.top / scaledUpHeight : 0;

  const translateYImgBackground = Math.max(0, Math.min(200, 100 * scrollPercentage * 2.7)).toFixed(4);
  const translateYFlakes = Math.max(0, Math.min(400, 50 + (100 * scrollPercentage * 3))).toFixed(4);
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
    componentHeight: scaledUpHeight ? `${scaledUpHeight}px` : '100%',
    translateYImgBackground,
    translateYFlakes,
    translateXLeftFlake,
    translateXRightFlake
  };
};

export const CodeDesignContainer = compose(
    withRefs(2),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
  )(CodeDesignComponent);
