import {
  SCROLL_POSITION_CHANGE,
  INIT_GO_TO_CODE_REALISATION,
  END_GO_TO_CODE_REALISATION,
  INIT_GO_TO_DESIGN_REALISATION,
  END_GO_TO_DESIGN_REALISATION
} from './homepage.action';

import {INIT_VISION_CMP_SIZE} from './vision-digital/vision-digital.action';
import {INIT_QUALITY_METHOD_CMP_SIZE} from './quality-method/quality-method.action';

export const initState = {
  scrollPosition: 0,
  windowHeight: 1000,
  startCodeLinkTransition: false,
  startDesignLinkTransition: false
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

  case INIT_VISION_CMP_SIZE : {
    return {
      ...state,
      visionComponentSize: action.size
    };
  }
  case INIT_QUALITY_METHOD_CMP_SIZE : {
    return {
      ...state,
      qualityMethodComponentSize: action.size
    };
  }
  default:
    return state;
  }
};
