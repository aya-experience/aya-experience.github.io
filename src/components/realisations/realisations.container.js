import {connect} from 'react-redux';
import {Realisations} from './realisations';
import {initRealisations} from './realisation.action';

const mapDispatchToProps = dispatch => ({
  initRealisations: collection => dispatch(initRealisations(collection))
});

const mapStateToProps = state => {
  return {
    realisations: state.realisation.realisations
  };
};

export const RealisationsContainer = connect(mapStateToProps, mapDispatchToProps)(Realisations);
