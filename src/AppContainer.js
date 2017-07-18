import React from 'react';
import PropTypes from 'prop-types';

import './styles/index.global.css';
import './styles/flake.global.css';
import './styles/slider.global.css';

import Container from './components/commons/Container';
import DefaultHeadMeta from './components/commons/DefaultHeadMeta';
import Content from './components/commons/Content';

import './manifest.json';

const AppContainer = props => (
  <Container>
    <DefaultHeadMeta/>
    <Content>
      { props.children }
    </Content>
  </Container>
);

AppContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppContainer;
