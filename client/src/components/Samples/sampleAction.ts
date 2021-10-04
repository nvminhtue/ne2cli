import { createActions } from 'redux-actions';

import { ActionTypes } from './sampleConstant';

export const {
  getSample,
  getSamples,
  saveSamplesData,
  saveSampleData,
  deleteSample,
  editSamdple,
  createSample,
} = createActions({
  [ActionTypes.GET_SAMPLE]: (payload) => ({ id: payload }),
  [ActionTypes.GET_SAMPLES]: (payload) => payload,
  [ActionTypes.SAVE_SAMPLES_DATA]: (payload) => ({ samples: payload }),
  [ActionTypes.SAVE_SAMPLE_DATA]: (payload) => ({ sample: payload }),
  [ActionTypes.DELETE_SAMPLE]: (payload) => ({ id: payload }),
  [ActionTypes.EDIT_SAMPLE]: (payload) => payload,
  [ActionTypes.CREATE_SAMPLE]: (payload) => payload,
});

export type SampleActions = 
  typeof getSample |
  typeof getSamples |
  typeof deleteSample |
  typeof createSample |
  typeof editSamdple
