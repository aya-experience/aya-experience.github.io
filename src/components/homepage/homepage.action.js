export const SCROLL_POSITION_CHANGE = 'SCROLL_POSITION_CHANGE';

export const scrollPositionChange = position => {
  return {
    type: SCROLL_POSITION_CHANGE,
    position
  };
};

export const INIT_GO_TO_CODE_REALISATION = 'INIT_GO_TO_DESIGN_REALISATION';
export const END_GO_TO_CODE_REALISATION = 'END_GO_TO_DESIGN_REALISATION';

const initGoToCodeRealisation = () => ({type: INIT_GO_TO_CODE_REALISATION});
const endGoToCodeRealisation = () => ({type: END_GO_TO_CODE_REALISATION});

export const goToCodeRealisation = router => dispatch => {
  dispatch(initGoToCodeRealisation());
  setTimeout(() => {
    router.push('/realisations/');
    dispatch(endGoToCodeRealisation());
  }, 900);
};

export const INIT_GO_TO_DESIGN_REALISATION = 'INIT_GO_TO_CODE_REALISATION';
export const END_GO_TO_DESIGN_REALISATION = 'END_GO_TO_CODE_REALISATION';

const initGoToDesignRealisation = () => ({type: INIT_GO_TO_DESIGN_REALISATION});
const endGoToDesignRealisation = () => ({type: END_GO_TO_DESIGN_REALISATION});

export const goToDesignRealisation = router => dispatch => {
  dispatch(initGoToDesignRealisation());
  setTimeout(() => {
    router.push('/realisations/');
    dispatch(endGoToDesignRealisation());
  }, 900);
};
