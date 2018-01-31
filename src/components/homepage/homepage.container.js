import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import {Homepage} from './homepage';
import {scrollPositionChange, toogle3d} from './homepage.action';
import Konami from 'konami-code.js';

const mapDispatchToProps = dispatch => ({
  updateScrollPosition: position => dispatch(scrollPositionChange(position)),
  toogle3d: () => dispatch(toogle3d())
});

const mapStateToProps = () => ({});

export const HomepageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      if (typeof window === 'undefined') {
        return;
      }

      // Listen scroll event
      this.scrollContainer = document.querySelector('.parallax');
      let ticking = false;
      let scrollPosition = 0;
      this.scrollUpdater = () => {
        scrollPosition = this.scrollContainer.scrollTop;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.props.updateScrollPosition(scrollPosition);
            ticking = false;
          });
        }
        ticking = true;
      };
      this.scrollContainer.addEventListener('scroll', this.scrollUpdater);

      // Konami code
      this.konami = new Konami(() => {
        this.props.toogle3d();
      });
    },
    componentWillUnmount() {
      this.scrollContainer.removeEventListener('scroll', this.scrollUpdater);
      this.konami.unload();
    }
  })
)(Homepage);
