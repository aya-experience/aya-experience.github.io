import React from 'react';
import PropTypes from 'prop-types';

const styles = {};

const Container = props => (
  <div className={styles.container}>
    { props.children }
  </div>
);

Container.defaultProps = {
  children: null
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
