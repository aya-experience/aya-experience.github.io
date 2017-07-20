export const INIT_REALISATIONS = 'INIT_REALISATIONS';

export const initRealisations = collection => ({
  type: INIT_REALISATIONS,
  collection
});

export const FILTER_REALISATIONS_BY_TYPES = 'FILTER_REALISATIONS_BY_TYPES';

export const filterRealisationByTypes = (router, type) => {
  router.push(`/realisations/?types=${type}`);
  return {
    type: FILTER_REALISATIONS_BY_TYPES
  };
};
