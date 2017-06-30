import {combineReducers} from 'redux';
import {logger} from 'redux-logger'; // TODO import only in dev mode
import createStore from 'phenomic/lib/redux/createStore';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from 'phenomic/lib/redux/modules';
import {realisationReducer} from './components/realisations/realisation.reducer';
import {homepageReducer} from './components/homepage/homepage.reducer';

console.log(process.env);
const store = createStore(
  combineReducers({
    ...phenomicReducers,
    realisation: realisationReducer,
    homepage: homepageReducer
  }),
  {...(typeof window !== 'undefined') && window.__INITIAL_STATE__},
  [logger, thunk]
);

export default store;
