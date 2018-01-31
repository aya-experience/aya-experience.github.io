import React, {Component} from 'react';
import {Pacman} from '../components/commons/pacman/pacman';

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
              <Pacman/>
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
