import {connect} from 'react-redux';
import {compose} from 'recompose';
import {VisionDigitalComponent} from './vision-digital';
import {getComponentSize} from '../../../hoc/getComponentSize';
import {initVisionCmpSize} from './vision-digital.action';

const mapDispatchToProps = dispatch => ({
  initVisionCmpSize: size => dispatch(initVisionCmpSize(size))
});

const mapStateToProps = state => {
  const componentSize = state.homepage.visionComponentSize;

  const windowTopToComponentTopDistance = componentSize ? state.homepage.scrollPosition - componentSize.top : 1000;
  const scrollPercentage = componentSize && windowTopToComponentTopDistance > 0 ? windowTopToComponentTopDistance / (componentSize.height * 3) : 0;

  const translateYImgBackground = Math.max(0, Math.min(100, 100 * scrollPercentage * 2)).toFixed(4);
  const translateYImgEcaille = Math.max(0, Math.min(100, 40 + (100 * scrollPercentage * 1.5))).toFixed(4);
  const translateXRightEcaille = Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 5))).toFixed(4);
  const translateXLeftEcaille = (-Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 5)))).toFixed(4);

  return {
    componentHeight: componentSize ? `${componentSize.height}px` : '100%',
    translateYImgBackground,
    translateYImgEcaille,
    translateXLeftEcaille,
    translateXRightEcaille
  };
};

export const VisionDigitalContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    getComponentSize('initVisionCmpSize')
  )(VisionDigitalComponent);
