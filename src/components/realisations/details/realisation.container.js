import {connect} from 'react-redux';
import {Realisation} from './realisation';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state, props) => {
  if (props.isLoading) {
    return {};
  }
  const {name, images, description} = props.head.real;
  return {
    name,
    images,
    description
  };
};

export const RealisationContainer = connect(mapStateToProps, mapDispatchToProps)(Realisation);
