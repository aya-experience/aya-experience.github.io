export const SCROLL_POSITION_CHANGE = 'SCROLL_POSITION_CHANGE';

export const scrollPositionChange = position => {
  return {
    type: SCROLL_POSITION_CHANGE,
    position
  };
};
