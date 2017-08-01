export const INIT_VISION_CMP_SIZE = 'INIT_VISION_CMP_SIZE';

export const initVisionCmpSize = size => {
  return {
    type: INIT_VISION_CMP_SIZE,
    size: {
      ...size,
      height: size.height * 3,
      bottom: size.bottom + (size.height * 2)
    }
  };
};
