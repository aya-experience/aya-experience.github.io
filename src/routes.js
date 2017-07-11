import React from 'react';
import {Route} from 'react-router';
import {PageContainer as PhenomicPageContainer} from 'phenomic';

import AppContainer from './AppContainer';
import Page from './components/Page';
import PageError from './components/PageError';
import {HomepageContainer} from './components/homepage/homepage.container';
import {RealisationsContainer} from './components/realisations/realisations.container';
import {RealisationContainer} from './components/realisations/details/realisation.container';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      PageError,
      Homepage: HomepageContainer,
      Realisations: RealisationsContainer,
      Realisation: RealisationContainer
    }}
    />
);

export default (
  <Route Component={AppContainer}>
    <Route path="*" component={PageContainer}/>
  </Route>
);
