import React from 'react';
import PropTypes from 'prop-types';

const styles = {};

const Container = props => (
  <div className={styles.container}>
    { props.children }
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
