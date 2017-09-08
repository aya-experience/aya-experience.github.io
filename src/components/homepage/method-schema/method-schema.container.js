import {connect} from 'react-redux';
import {compose} from 'recompose';
import {withRefs} from '../../../hoc/withRefs';
import {MethodSchemaComponent} from './method-schema';
import {waitImgsIsLoaded} from '../../../hoc/waitImgsIsLoaded';

const mapDispatchToProps = () => ({
});

const mapStateToProps = state => {
  return {
    isDisplayed3D: state.homepage.isDisplayed3D
  };
};

export const MethodSchemaContainer = compose(
    waitImgsIsLoaded(['/assets/background/road-snow.jpg']),
    withRefs(2),
    connect(mapStateToProps, mapDispatchToProps)
  )(MethodSchemaComponent);
