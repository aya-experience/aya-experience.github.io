import {INIT_REALISATIONS} from './realisation.action';

export const initState = {
  realisations: []
};
export const initAction = {};

export const realisationReducer = (state = initState, action = initAction) => {
  switch (action.type) {
  case INIT_REALISATIONS: {
    const realisations = action.collection
      .filter(item => item.layout === 'Realisation')
      .map(item => {
        return {
          ...item.real,
          url: item.__url
        };
      });
    return Object.assign(
          {},
          state,
          {realisations}
        );
  }
  default:
    return state;
  }
};
