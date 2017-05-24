import React, { PropTypes } from "react"

import './styles/bootstrap.global.css';
import './index.global.css';
import './styles/slider.global.css';

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Content from "./components/Content"

import './manifest.json';

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Content>
      { props.children }
    </Content>
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
