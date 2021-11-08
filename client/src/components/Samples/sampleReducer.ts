import { handleActions } from 'redux-actions';

import { saveSampleData, saveSamplesData, } from './sampleAction';

export const initState = {
  samples: [],
  sample: {}
};

export default handleActions({
  [saveSamplesData.toString()]: (state, action) => ({
    ...state,
    samples: action.payload.samples,
  }),
  [saveSampleData.toString()]: (state, { payload }) => ({
    ...state,
    sample: payload.sample,
  })
}, initState);
