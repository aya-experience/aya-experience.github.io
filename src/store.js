import {combineReducers} from 'redux';
import createStore from 'phenomic/lib/redux/createStore';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from 'phenomic/lib/redux/modules';
import {realisationReducer} from './components/realisations/realisation.reducer';
import {homepageReducer} from './components/homepage/homepage.reducer';

const middlewares = [thunk];

const reduxDevtools = (typeof window !== 'undefined') && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    realisation: realisationReducer,
    homepage: homepageReducer
  }),
  reduxDevtools || {...(typeof window !== 'undefined') && window.__INITIAL_STATE__},
  middlewares
);

export default store;
