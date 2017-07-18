import React, {Component} from 'react';

export const waitImgsIsLoaded = imgUrls => {
  return WrappedComponent => {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isImgsLoaded: false
        };
      }

      componentDidMount() {
        if (typeof window === 'undefined') {
          return;
        }
        if (!imgUrls || imgUrls.length === 0) {
          return this.setState({
            isImgsLoaded: true
          });
        }

        imgUrls.forEach(imgUrl => {
          const img = new window.Image();
          img.onload = this.anotherImgIsLoaded.bind(this);
          img.onabort = this.thereIsAProblemWithImgLoading.bind(this);
          img.onerror = this.thereIsAProblemWithImgLoading.bind(this);
          img.src = imgUrl;
        });
      }

      anotherImgIsLoaded() {
        if (this.nbOfImgLoaded) {
          this.nbOfImgLoaded++;
        } else {
          this.nbOfImgLoaded = 1;
        }

        if (this.nbOfImgLoaded === imgUrls.length) {
          this.setState({
            isImgsLoaded: true
          });
        }
      }

      thereIsAProblemWithImgLoading(err) {
        console.error(imgUrls, err);
        this.setState({
          isImgsLoaded: false
        });
      }

      render() {
        if (!this.state.isImgsLoaded) {
          return (
            <div style={{height: '100px'}}>
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-pacman" style={{background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%'}}>
                <g style={{display: 'block'}}>
                  <circle cx="60" cy="50" r="4" fill="#fdc823">
                    <animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="2.1" begin="-1.4070000000000003s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="2.1" begin="-1.4070000000000003s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="60" cy="50" r="4" fill="#fdc823">
                    <animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="2.1" begin="-0.6930000000000001s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="2.1" begin="-0.6930000000000001s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="60" cy="50" r="4" fill="#fdc823">
                    <animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="2.1" begin="0s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="2.1" begin="0s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <g transform="translate(-15 0)">
                  <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#eca611">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" dur="2.1s" begin="0s" repeatCount="indefinite"/>
                  </path>
                  <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#eca611">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" dur="2.1s" begin="0s" repeatCount="indefinite"/>
                  </path>
                </g>
              </svg>
            </div>
          );
        }

        return (
          <WrappedComponent
            {...this.props}
            {...this.state}
            />
        );
      }
    };
  };
};
