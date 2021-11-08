import { createSelector, Selector } from 'reselect';

import { TState, TStateSelector } from 'src/interfaces/Samples/sampleSelector';

const selector: Selector<TStateSelector, TState> = (state) => {
  return state.sampleReducer;
};

export const samplesSelector = createSelector
(
  selector,
  state => ({ samples: state.samples }),
);

export const sampleSelector = createSelector
(
  selector,
  state => ({ sample: state.sample }),
);
