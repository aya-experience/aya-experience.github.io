import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRefs} from '../../../hoc/withRefs';
import {QualityMethodComponent} from './quality-method';

const mapDispatchToProps = () => ({
});

let scaledUpHeight;

const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;
  const imageSize = props.ref1 ? props.ref1.getBoundingClientRect() : null;
  if (imageSize && !scaledUpHeight) {
    scaledUpHeight = imageSize.height * 2;
  }

  const scrollPercentage = scaledUpHeight && componentSize && componentSize.top < 0 ? -componentSize.top / scaledUpHeight : 0;

  const translateYImgBackground = Math.max(0, Math.min(100, 100 * scrollPercentage * 1.2)).toFixed(4);
  const translateYFlakes = Math.max(0, Math.min(150, 40 + (100 * scrollPercentage * 2))).toFixed(4);
  const translateXRightFlake = Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 4))).toFixed(4);
  const translateXLeftFlake = (-Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 4)))).toFixed(4);

  return {
    refFunc0: props.refFunc0,
    refFunc1: props.refFunc1,
    componentHeight: scaledUpHeight ? `${scaledUpHeight}px` : '100%',
    translateYImgBackground,
    translateYFlakes,
    translateXLeftFlake,
    translateXRightFlake
  };
};

export const QualityMethodContainer = compose(
    withRefs(2),
    connect(mapStateToProps, mapDispatchToProps)
  )(QualityMethodComponent);
