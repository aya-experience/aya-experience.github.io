import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRefs} from '../../../hoc/withRefs';
import {MethodSchemaComponent} from './method-schema';

const mapDispatchToProps = () => ({
});

let scaledUpHeight;

const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;
  const imageSize = props.ref1 ? props.ref1.getBoundingClientRect() : null;
  if (imageSize && !scaledUpHeight) {
    scaledUpHeight = imageSize.height * 2;
  }

  const scrollPercentage = scaledUpHeight && componentSize.top < 0 ? -componentSize.top / scaledUpHeight : 0;

  const translateYImgBackground = Math.max(0, Math.min(100, 100 * scrollPercentage * 1.8)).toFixed(4);
  const translateYSchema = Math.max(0, Math.min(800, 50 + (100 * scrollPercentage * 11))).toFixed(4);

  return {
    refFunc0: props.refFunc0,
    refFunc1: props.refFunc1,
    componentHeight: scaledUpHeight ? `${scaledUpHeight}px` : '100%',
    translateYImgBackground,
    translateYSchema
  };
};

export const MethodSchemaContainer = compose(
    withRefs(2),
    connect(mapStateToProps, mapDispatchToProps)
  )(MethodSchemaComponent);
