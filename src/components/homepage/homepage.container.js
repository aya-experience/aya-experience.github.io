import {connect} from 'react-redux';
import {Homepage} from './homepage';
import {scrollPositionChange} from './homepage.action';

const mapDispatchToProps = dispatch => ({
  updateScrollPosition: position => dispatch(scrollPositionChange(position))
});

const mapStateToProps = () => ({});

export const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);
