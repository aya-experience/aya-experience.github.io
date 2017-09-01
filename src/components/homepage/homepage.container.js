import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import {Homepage} from './homepage';
import {scrollPositionChange} from './homepage.action';

const mapDispatchToProps = dispatch => ({
  updateScrollPosition: position => dispatch(scrollPositionChange(position))
});

const mapStateToProps = () => ({});

export const HomepageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const phenomic = document.querySelector('.parallax');
      let ticking = false;
      let scrollPosition = 0;
      phenomic.addEventListener('scroll', () => {
        scrollPosition = phenomic.scrollTop;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.props.updateScrollPosition(scrollPosition);
            ticking = false;
          });
        }
        ticking = true;
      });
    }
  })
)(Homepage);
