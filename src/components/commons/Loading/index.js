import React from 'react';
import Helmet from 'react-helmet';
import TopBarProgressIndicator from 'react-topbar-progress-indicator';

import styles from './index.css';
import {Pacman} from '../pacman/pacman';

TopBarProgressIndicator.config({
  barColors: {
    0: '#fff',
    '1.0': '#fff'
  },
  shadowBlur: 5
});

const Loading = () => (
  <div>
    <Helmet
      title={'Loading...'}
      />
    <TopBarProgressIndicator/>
    <div className={styles.loaderContainer}>
      <Pacman/>
    </div>
  </div>
);

export default Loading;
