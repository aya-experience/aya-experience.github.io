import React, { PropTypes } from "react"

import './styles/bootstrap.global.css';
import './styles/common.scss';
import './styles/global.scss';
import './styles/header.scss';
import './styles/scale-svg.scss';
import './styles/separation.scss';

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Content from "./components/Content"
import Footer from "./components/Footer"

import './manifest.json';

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
