import {
  SCROLL_POSITION_CHANGE,
  INIT_GO_TO_CODE_REALISATION,
  END_GO_TO_CODE_REALISATION,
  INIT_GO_TO_DESIGN_REALISATION,
  END_GO_TO_DESIGN_REALISATION
} from './homepage.action';

export const initState = {
  scrollPosition: 0,
  startCodeLinkTransition: false,
  startDesignLinkTransition: false
};
export const initAction = {};

export const homepageReducer = (state = initState, action = initAction) => {
  switch (action.type) {
  case SCROLL_POSITION_CHANGE: {
    return {
      ...state,
      scrollPosition: action.position
    };
  }
  case INIT_GO_TO_CODE_REALISATION: {
    return {
      ...state,
      startCodeLinkTransition: true
    };
  }
  case END_GO_TO_CODE_REALISATION: {
    return {
      ...state,
      startCodeLinkTransition: false
    };
  }
  case INIT_GO_TO_DESIGN_REALISATION: {
    return {
      ...state,
      startDesignLinkTransition: true
    };
  }
  case END_GO_TO_DESIGN_REALISATION: {
    return {
      ...state,
      startDesignLinkTransition: false
    };
  }
  default:
    return state;
  }
};
