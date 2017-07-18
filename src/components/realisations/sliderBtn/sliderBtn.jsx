import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styles from './sliderBtn.css';

export const SliderBtn = ({reverse, onClick}) => (
  <div>
    <button onClick={onClick} type="button" className={Styles.slider_btn}>
      <img
        alt="next"
        src="/assets/misc/arrow.svg"
        className={classNames(Styles.slider_btn_img, {[Styles.slider_btn_reverse]: reverse})}
        />
    </button>
  </div>
);

SliderBtn.defaultProps = {
  reverse: false,
  onClick: () => {}
};

SliderBtn.propTypes = {
  reverse: PropTypes.bool,
  onClick: PropTypes.func
};
