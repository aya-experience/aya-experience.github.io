import React from 'react';
import PropTypes from 'prop-types';

export const FlakeGroupComponent = ({
  refFunc0,
  refFunc1,
  translateXLeftFlake,
  translateXRightFlake,
  background,
  leftFlake,
  rightFlake,
  className,
  none
}) => {
  return (
    <section ref={refFunc0} className={`flakes_group_parralax ${className}`}>
      <div ref={refFunc1} className={none ? '' : 'flakes_background_parralax'}>
        {background}
      </div>
      <div className="flakes_container_parralax">
        <div className="flakes_container">
          <div className="flake_left" style={{transform: `translate3d(${translateXLeftFlake}%, 10%, 0)`}}>
            {leftFlake}
          </div>
          <div className="flake_right" style={{transform: `translate3d(${translateXRightFlake}%, 60%, 0)`}}>
            {rightFlake}
          </div>
        </div>
      </div>
    </section>
  );
};

FlakeGroupComponent.defaultProps = {
  className: ''
};

FlakeGroupComponent.propTypes = {
  translateXLeftFlake: PropTypes.string.isRequired,
  translateXRightFlake: PropTypes.string.isRequired,
  refFunc0: PropTypes.func.isRequired,
  refFunc1: PropTypes.func.isRequired,
  background: PropTypes.node.isRequired,
  leftFlake: PropTypes.node.isRequired,
  rightFlake: PropTypes.node.isRequired,

  className: PropTypes.string,
  none: PropTypes.bool.isRequired
};
