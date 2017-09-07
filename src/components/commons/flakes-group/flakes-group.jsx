import React from 'react';
import classNames from 'classnames';
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
  noParralaxForBackground,
  isDisplayed3D
}) => {
  return (
    <section ref={refFunc0} className={classNames('flakes_group_parralax', {paralax3d: isDisplayed3D}, className)}>
      <div ref={refFunc1} className={noParralaxForBackground ? '' : 'flakes_background_parralax'}>
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
  className: '',
  noParralaxForBackground: false
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
  noParralaxForBackground: PropTypes.bool,

  isDisplayed3D: PropTypes.bool.isRequired
};
