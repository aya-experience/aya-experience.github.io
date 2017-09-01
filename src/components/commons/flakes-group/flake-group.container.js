import {connect} from 'react-redux';
import {compose} from 'recompose';
import {FlakeGroupComponent} from './flakes-group';
import {withRefs} from '../../../hoc/withRefs';

const mapDispatchToProps = () => ({
});

const mapStateToProps = (state, props) => {
  const componentSize = props.ref0 ? props.ref0.getBoundingClientRect() : null;

  const scrollPercentage = componentSize && componentSize.top < 600 ? (600 + -componentSize.top) / componentSize.height : 0;

  const translateXRightFlake = Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 1))).toFixed(2);
  const translateXLeftFlake = (-Math.max(0, Math.min(100, 100 - (100 * scrollPercentage * 2)))).toFixed(2);

  return {
    refFunc0: props.refFunc0,
    refFunc1: props.refFunc1,
    translateXLeftFlake,
    translateXRightFlake,
    background: props.children[0],
    leftFlake: props.children[1],
    rightFlake: props.children[2],
    none: props.none
  };
};

export const FlakeGroupContainer = compose(
    withRefs(2),
    connect(mapStateToProps, mapDispatchToProps)
  )(FlakeGroupComponent);
