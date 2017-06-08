import React from 'react';
import {Route} from 'react-router';
import {PageContainer as PhenomicPageContainer} from 'phenomic';
import reactGa from 'react-ga';
import packageInfo from '../package.json';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  reactGa.initialize(packageInfo.googleAnalytics);
}

import AppContainer from './AppContainer';
import Page from './components/Page';
import PageError from './components/PageError';
import {HomepageContainer} from './components/homepage/homepage.container';
import {RealisationsContainer} from './components/realisations/realisation.container';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      PageError,
      Homepage: HomepageContainer,
      Realisations: RealisationsContainer
    }}
    />
);

const logPageView = () => {
  if (isBrowser) {
    reactGa.set({page: window.location.pathname});
    reactGa.pageview(window.location.pathname);
  }
};

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} onEnter={logPageView}/>
  </Route>
);
