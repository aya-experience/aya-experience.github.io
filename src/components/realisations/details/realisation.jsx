import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

import Styles from './realisation.css';

export const Realisation = ({name, images, description}) => {
  if (!name) {
    return <div className={Styles.container}>Loading...</div>;
  }

  const imagesSet = Object.keys(images)
    .filter(key => key !== 'thumb')
    .map(key => `${images[key]} ${key}`)
    .join(', ');

  const splittedDescription = description.split('<br>');
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>{name}</h1>
      <Link to="/realisations/" className={Styles.real_link}>
        <img className={Styles.real_link_img} src="/assets/misc/cross.png" alt="back to realisations"/>
      </Link>
      <picture className={Styles.illustration}>
        <source srcSet={imagesSet}/>
        <img
          src={images['1x']}
          className={Styles.illustration_img}
          alt={`${name} illustration`}
          />
      </picture>
      <p className={Styles.description}>
        {splittedDescription.map((pPart, i) => {
          return (<span key={pPart}>
            {pPart}
            {i === splittedDescription.length - 1 ? '' : <br/>}
          </span>);
        })}
      </p>
    </div>
  );
};

Realisation.defaultProps = {
  name: null,
  images: null,
  description: null
};

Realisation.propTypes = {
  name: PropTypes.string,
  images: PropTypes.shape({
    '1x': PropTypes.string.isRequired
  }),
  description: PropTypes.string
};
