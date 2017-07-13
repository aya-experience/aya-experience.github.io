import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {Link} from 'react-router';
import classNames from 'classnames';

import Styles from './realisations.css';

export class Realisations extends Component {

  componentDidMount() {
    this.props.initRealisations(this.context.collection);
  }

  render() {
    const {realisations} = this.props;
    if (realisations.length === 0) {
      return <div>There will have realisations soon</div>;
    }

    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: window ?
        window.innerWidth > 1000 ? 3 :
        window.innerWidth > 600 ? 2 : 1 :
        3,
      slidesToScroll: 1,
      nextArrow: (
        <div>
          <button type="button" className={Styles.slider_btn}>
            <img alt="next" src="/assets/arrow.svg" className={Styles.slider_btn_img}/>
          </button>
        </div>
      ),
      prevArrow: (
        <div>
          <button type="button" className={classNames(Styles.slider_btn, Styles.slider_btn_reverse)}>
            <img alt="next" src="/assets/arrow.svg" className={Styles.slider_btn_img}/>
          </button>
        </div>
      ),
      autoplay: false,
      infinite: true,
      className: Styles.slider
    };

    return (
      <div className={Styles.container}>
        <h1 className={Styles.title}>Réalisations</h1>
        <Link to="/" className={Styles.home_link}>
          <img className={Styles.home_link_img} src="/assets/close.png" alt="back to home"/>
        </Link>
        <Slider {...settings}>
          {realisations.map(reference => {
            const splittedDescription = reference.description.split('<br>');
            return (
              <div key={reference.name} className={Styles.slider_content}>
                <Link to={reference.url} className={Styles.slider_content_link}>
                  <img className={Styles.slider_content_img} src={reference.images.thumb} alt={`${reference.name} project illustration`}/>
                </Link>
                <h2 className={Styles.slider_content_title}>{reference.name}</h2>
                <p className={Styles.slider_content_p}>
                  {splittedDescription.map((pPart, i) => {
                    return (<span key={pPart}>
                      {pPart}
                      {i === splittedDescription.length - 1 ? '' : <br/>}
                    </span>);
                  })}
                </p>
                <ul className={Styles.slider_content_types}>
                  {reference.types.map(type => (
                    <li key={type} className={Styles.slider_content_type}>{type}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

Realisations.propTypes = {
  realisations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.shape({
      thumb: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  initRealisations: PropTypes.func.isRequired
};

Realisations.contextTypes = {
  collection: PropTypes.array.isRequired
};
