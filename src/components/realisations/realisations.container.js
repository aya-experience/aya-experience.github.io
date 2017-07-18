import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Realisations} from './realisations';
import {initRealisations, filterRealisationByTypes} from './realisation.action';

const mapDispatchToProps = dispatch => ({
  initRealisations: collection => dispatch(initRealisations(collection)),
  handleFilterRealisationByTypes: (router, type) => e => {
    e.preventDefault();
    dispatch(filterRealisationByTypes(router, type));
  }
});

const mapStateToProps = state => {
  const params = typeof window === 'undefined' ?
    {} :
    window.location.search
      .substring(1)
      .split('&')
      .reduce((finalObj, search) => {
        const splittedSearch = search.split('=');
        finalObj[splittedSearch[0]] = splittedSearch[1];
        return finalObj;
      }, {});
  return {
    realisations: state.realisation.realisations
      .filter(real => {
        return params.entities ? real.entities.includes(params.entities) : true;
      })
      .filter(real => {
        console.log(params.types, real.types, real.types.includes(params.types));
        return params.types ? real.types.includes(params.types) : true;
      })
  };
};

export const RealisationsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Realisations));
