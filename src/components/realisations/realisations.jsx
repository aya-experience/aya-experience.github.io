import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {Link, withRouter} from 'react-router';

import {SliderBtn} from './sliderBtn/sliderBtn';
import Styles from './realisations.css';

export class RealisationsComponent extends Component {

  componentDidMount() {
    this.props.initRealisations(this.context.collection);
  }

  render() {
    const {realisations} = this.props;
    if (realisations.length === 0) {
      return (
        <div className={Styles.container}>
          <h1 className={Styles.title}>Réalisations</h1>
          <p>There will have realisations soon</p>
        </div>
      );
    }

    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: window ?
        window.innerWidth > 1000 ? 3 :
        window.innerWidth > 600 ? 2 : 1 :
        3,
      slidesToScroll: 1,
      nextArrow: <SliderBtn/>,
      prevArrow: <SliderBtn reverse/>,
      autoplay: false,
      infinite: true,
      className: Styles.slider
    };

    return (
      <div className={Styles.container}>
        <h1 className={Styles.title}>Réalisations</h1>
        <Link to="/" className={Styles.home_link}>
          <img className={Styles.home_link_img} src="/assets/misc/cross.png" alt="back to home"/>
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
                    <li key={type} className={Styles.slider_content_type}>
                      <Link to={`/realisations/?types=${type}`} onClick={this.props.handleFilterRealisationByTypes(this.props.router, type)}>
                        {type}
                      </Link>
                    </li>
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

RealisationsComponent.propTypes = {
  realisations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.shape({
      thumb: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  initRealisations: PropTypes.func.isRequired,
  handleFilterRealisationByTypes: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

RealisationsComponent.contextTypes = {
  collection: PropTypes.array.isRequired
};

export const Realisations = withRouter(RealisationsComponent);
