import {connect} from 'react-redux';
import {CodeComponent} from './code';
import {goToCodeRealisation, goToDesignRealisation} from '../homepage.action';

const mapDispatchToProps = dispatch => ({
  goToCodeRealisation: router => dispatch(goToCodeRealisation(router)),
  goToDesignRealisation: router => dispatch(goToDesignRealisation(router))
});

const mapStateToProps = state => {
  return {
    startCodeLinkTransition: state.homepage.startCodeLinkTransition,
    startDesignLinkTransition: state.homepage.startDesignLinkTransition
  };
};

export const CodeContainer = connect(mapStateToProps, mapDispatchToProps)(CodeComponent);
