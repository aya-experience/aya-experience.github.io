import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRefs} from '../../../hoc/withRefs';
import {QualityMethodComponent} from './quality-method';
import {initQualityMethodCmpSize} from './quality-method.action';

const mapDispatchToProps = dispatch => ({
  initCmpSize: size => dispatch(initQualityMethodCmpSize(size))
});

let isCompnentAlreadyScaledBy3 = false;

const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;
  if (componentSize && !isCompnentAlreadyScaledBy3) {
    isCompnentAlreadyScaledBy3 = true;
    componentSize.height *= 3;
  }

  const windowTopToComponentTopDistance = componentSize ? state.homepage.scrollPosition - componentSize.top : 1000;
  const scrollPercentage = componentSize && windowTopToComponentTopDistance > 0 ? windowTopToComponentTopDistance / (componentSize.height * 3) : 0;

  const translateYImgBackground = Math.max(0, Math.min(100, 100 * scrollPercentage * 2)).toFixed(4);
  const translateYImgEcaille = Math.max(0, Math.min(100, 40 + (100 * scrollPercentage * 1.5))).toFixed(4);
  const translateXRightEcaille = Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 5))).toFixed(4);
  const translateXLeftEcaille = (-Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 5)))).toFixed(4);

  return {
    refFunc0: props.refFunc0,
    componentHeight: componentSize ? `${componentSize.height}px` : '100%',
    translateYImgBackground,
    translateYImgEcaille,
    translateXLeftEcaille,
    translateXRightEcaille
  };
};

export const QualityMethodContainer = compose(
    withRefs(1),
    connect(mapStateToProps, mapDispatchToProps)
  )(QualityMethodComponent);
