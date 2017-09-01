import {combineReducers} from 'redux';
import createStore from 'phenomic/lib/redux/createStore';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from 'phenomic/lib/redux/modules';
import {realisationReducer} from './components/realisations/realisation.reducer';
import {homepageReducer} from './components/homepage/homepage.reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // Const logger = require('redux-logger');
  // middlewares.push(logger.logger);
}

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    realisation: realisationReducer,
    homepage: homepageReducer
  }),
  {...(typeof window !== 'undefined') && window.__INITIAL_STATE__},
  middlewares
);

export default store;
