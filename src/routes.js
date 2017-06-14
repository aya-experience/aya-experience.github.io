import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import reactGa from "react-ga";

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  reactGa.initialize("UA-74307110-4");
}

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage
    }}
  />
)

const logPageView = () => {
  if (isBrowser) {
    reactGa.set({ page: window.location.pathname });
    reactGa.pageview(window.location.pathname);
  }
};


export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } onEnter={logPageView} />
  </Route>
)
