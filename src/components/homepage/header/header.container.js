import {connect} from 'react-redux';
import {HeaderComponent} from './header';

const mapDispatchToProps = () => ({
});

const mapStateToProps = state => {
  const scrollPercentage = (state.homepage.windowHeight - state.homepage.scrollPosition) / state.homepage.windowHeight;
  const inversedScrollPercentage = 1 - scrollPercentage;

  return {
    paragraphOpacity: scrollPercentage <= 1 ? (scrollPercentage).toFixed(4) : '0',
    translateYLogo: inversedScrollPercentage <= 1 ? (inversedScrollPercentage * -100).toFixed(4) : '-100',
    scaleCodeDesign: inversedScrollPercentage <= 1 ? (1 + inversedScrollPercentage).toFixed(4) : '2'
  };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
