import './index.scss';
import 'babel-polyfill';

import React from 'react'; // eslint-disable-line
import {render} from 'react-dom';
import {AppComponent} from './app/app.jsx';

render(
  <AppComponent></AppComponent>,
  document.querySelector('#app-aya')
);
