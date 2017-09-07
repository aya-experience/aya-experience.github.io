import {
  SCROLL_POSITION_CHANGE,
  INIT_GO_TO_CODE_REALISATION,
  END_GO_TO_CODE_REALISATION,
  INIT_GO_TO_DESIGN_REALISATION,
  END_GO_TO_DESIGN_REALISATION,
  TOGGLE_3D
} from './homepage.action';

export const initState = {
  scrollPosition: 0,
  windowHeight: 1000,
  startDesignLinkTransition: false,
  startCodeLinkTransition: false,
  isDisplayed3D: false
};
export const initAction = {};

export const homepageReducer = (state = initState, action = initAction) => {
  switch (action.type) {
  case SCROLL_POSITION_CHANGE: {
    return {
      ...state,
      scrollPosition: action.position,
      windowHeight: action.windowHeight
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
  case TOGGLE_3D: {
    return {
      ...state,
      isDisplayed3D: !state.isDisplayed3D
    };
  }
  default:
    return state;
  }
};
