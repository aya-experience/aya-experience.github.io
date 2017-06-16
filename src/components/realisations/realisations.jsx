import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {spring} from 'react-motion';
import {RouteTransition} from 'react-router-transition';

import Styles from './realisation.css';

export const Realisations = ({realisations, location}) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    className: Styles.slider
  };

  return (
    <RouteTransition
      pathname={location.pathname}
      atEnter={{offset: -100}}
      atLeave={{offset: spring(100, {stiffness: 330, damping: 90})}}
      atActive={{offset: spring(0, {stiffness: 330, damping: 90})}}
      mapStyles={function (styles) {
        return {
          height: '100%',
          transform: `translateX(${styles.offset}%)`
        };
      }}
      className={Styles.container} // eslint-disable-line
      >
      <h1 className={Styles.title}>Réalisations</h1>
      <Slider {...settings}>
        {realisations.map(reference => (
          <div key={reference.title} className={Styles.slider_content}>
            <img className={Styles.slider_content_img} src={reference.img} alt={`${reference.title} project illustration`}/>
            <h2 className={Styles.slider_content_title}>{reference.title}</h2>
            <p className={Styles.slider_content_p}>{reference.text}</p>
            <ul className={Styles.slider_content_types}>
              {reference.types.map(type => (
                <li key={type} className={Styles.slider_content_type}>{type}</li>
                ))}
            </ul>
          </div>
          ))}
      </Slider>
    </RouteTransition>
  );
};

Realisations.propTypes = {
  realisations: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired
};
