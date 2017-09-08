import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRefs} from '../../../hoc/withRefs';
import {AyaSchemaComponent} from './aya-schema';
import {waitImgsIsLoaded} from '../../../hoc/waitImgsIsLoaded';

const mapDispatchToProps = () => ({
});

const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;
  const scrollPercentage = componentSize && componentSize.top < 600 ? (600 + -componentSize.top) / componentSize.height : 0;

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
    scaleUpCenter,
    opacityCenter,
    translateXTopLeft,
    translateXBottomLeft,
    translateXTopRight,
    translateXBottomRight,
    isDisplayed3D: state.homepage.isDisplayed3D
  };
};

export const AyaSchemaContainer = compose(
    waitImgsIsLoaded(['/assets/background/mountain-night.jpg']),
    withRefs(2),
    connect(mapStateToProps, mapDispatchToProps)
  )(AyaSchemaComponent);
