import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRefs} from '../../../hoc/withRefs';
import {AyaSchemaComponent} from './aya-schema';

const mapDispatchToProps = () => ({
});

let scaledUpHeight;

const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;
  const imageSize = props.ref1 ? props.ref1.getBoundingClientRect() : null;
  if (imageSize && !scaledUpHeight) {
    scaledUpHeight = imageSize.height * 4;
  }

  const scrollPercentage = scaledUpHeight && componentSize.top < 0 ? -componentSize.top / scaledUpHeight : 0;

  const translateYImgBackground = Math.max(0, Math.min(300, 100 * scrollPercentage * 3.6)).toFixed(4);
  const translateYSchema = Math.max(-50, Math.min(720, -50 + (100 * scrollPercentage * 9))).toFixed(4);
  const scaleUpCenter = scrollPercentage < 0.25 ?
    Math.max(0, Math.min(1.75, scrollPercentage * 7)).toFixed(4) :
    scrollPercentage < 0.5 ?
    Math.max(1, Math.min(1.75, 1.75 - ((scrollPercentage * 7) - 1.5))).toFixed(4) :
    '1';
  const opacityCenter = Math.max(0, Math.min(1, scrollPercentage * 7)).toFixed(4);

  const translateXTopLeft = scrollPercentage > 0.30 ?
    Math.max(-500, Math.min(0, -500 + (700 * scrollPercentage))).toFixed(4) :
    '-500';
  const translateXTopRight = scrollPercentage > 0.40 ?
    Math.max(0, Math.min(500, 500 - (700 * scrollPercentage))).toFixed(4) :
    '500';
  const translateXBottomLeft = scrollPercentage > 0.50 ?
    Math.max(-500, Math.min(0, -500 + (700 * scrollPercentage))).toFixed(4) :
    '-500';
  const translateXBottomRight = scrollPercentage > 0.60 ?
    Math.max(0, Math.min(500, 500 - (700 * scrollPercentage))).toFixed(4) :
    '500';

  return {
    refFunc0: props.refFunc0,
    refFunc1: props.refFunc1,
    componentHeight: scaledUpHeight ? `${scaledUpHeight}px` : '100%',
    translateYImgBackground,
    translateYSchema,
    scaleUpCenter,
    opacityCenter,
    translateXTopLeft,
    translateXBottomLeft,
    translateXTopRight,
    translateXBottomRight
  };
};

export const AyaSchemaContainer = compose(
    withRefs(2),
    connect(mapStateToProps, mapDispatchToProps)
  )(AyaSchemaComponent);
