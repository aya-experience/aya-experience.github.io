export const INIT_QUALITY_METHOD_CMP_SIZE = 'INIT_QUALITY_METHOD_CMP_SIZE';

export const initQualityMethodCmpSize = size => ({
  type: INIT_QUALITY_METHOD_CMP_SIZE,
  size: {
    ...size
  }
});
