import React, {Component} from 'react';
import Slider from 'react-slick';

import Styles from './code.css';

const classExtractor = (obj) => Object.keys(obj).filter(k => !!obj[k]).join(' ');

class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeIsToogle: false,
      codeIsHighlight: false,
      designIsToogle: false,
      designIsHighlight: false,
    }
  }

  toggleCodePart() {
    this.setState({codeIsToogle: !this.state.codeIsToogle});
  }

  render() {
    const clearBothStyle = {clear: 'both'};

    const codeClassNames = {
      section_left: true,
      [Styles.code_block]: true,
      [Styles.code_block_highlight]: !this.state.codeIsToogle && this.state.codeIsHighlight,
      [Styles.code_block_deploy]: this.state.codeIsToogle
    }

    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    const codeReferences = [{
      img: '/assets/logo-design.png',
      text: 'HTML, CSS, JS, jQuery, Angular 1 & 2, React, Php, Java, Node',
    }, {
      img: '/assets/logo-design.png',
      text: 'HTML, CSS, JS, jQuery, Angular 1 & 2, React, Php, Java, Node',
    }]

    return (
      <section className={Styles.code}>
        <div
          onMouseEnter={() => this.setState({codeIsHighlight: true})}
          onMouseLeave={() => this.setState({codeIsHighlight: false})}
          className={classExtractor(codeClassNames)}
        >
          <div className={Styles.slider_container} onClick={e => e.preventDefault()}>
            <Slider className={Styles.slider} {...settings}>
              {codeReferences.map((reference, i) => (
                <div className={Styles.slider_content} key={i}>
                  <img className={Styles.slider_content_img} src={reference.img} alt="toTest" />
                  <p className={Styles.slider_content_p}>{reference.text}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="section_scale_left" onClick={() => this.toggleCodePart()}>
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMaxYMid">
              <image mask="url(#scale-mask-transparent-left)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-white.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="section_left_content section_scale_content">
              <div className={Styles.codeContent}>
                <h1 className={Styles.codeTitle}>Code</h1>
                <p className={Styles.codeP}>
                  HTML, CSS, JS,<br/>
                  jQuery, Angular 1 & 2, React,<br/>
                  Php, Java, Node
                </p>
              </div>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>

        <div className="section_right">
          <div className="section_scale_right">
            <svg viewBox="0 0 2830.56 3760.74" preserveAspectRatio="xMinYMid">
              <image mask="url(#scale-mask-transparent-right)" width="100%" height="100%" y="0" x="0"
                     xlinkHref="/assets/pixel-white.png"
                     preserveAspectRatio="xMinYMin slice"/>
            </svg>
            <div className="section_right_content section_scale_content">
              <div className={Styles.designContent}>
                <h1 className={Styles.designTitle}>Design</h1>
                <p className={Styles.designP}>
                  UX, UI, Visual Design,<br/>
                  Motion Design, Branding<br/>
                  Communication
                </p>
              </div>
            </div>
          </div>
          <div style={clearBothStyle}></div>
        </div>
        <div style={clearBothStyle}></div>
      </section>
    );
  }
}

Code.propTypes = {};

export const CodeComponent = Code;
