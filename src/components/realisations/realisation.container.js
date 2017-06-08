import {connect} from 'react-redux';
import realisationsData from './realisation.data';
import {Realisations} from './realisations';

const mapDispatchToProps = () => ({});

const mapStateToProps = (state, props) => {
  const types = ['UX', 'UI', 'JS'];
  return {
    realisations: realisationsData.filter(real => Boolean(types.find(type => real.types.includes(type)))),
    location: props.location || {pathname: '/realisations/'}
  };
};

export const RealisationsContainer = connect(mapStateToProps, mapDispatchToProps)(Realisations);
