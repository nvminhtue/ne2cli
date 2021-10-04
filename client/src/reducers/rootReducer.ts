import { combineReducers } from 'redux';

import sampleReducer from 'src/components/Samples/sampleReducer';

const rootReducer = combineReducers({
  sampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
