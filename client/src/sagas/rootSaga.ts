import { all, fork } from 'redux-saga/effects';

import sampleSaga from 'src/components/Samples/sampleSaga';

const rootSaga = function* () {
  yield all([
    fork(sampleSaga),
  ]);
};

export default rootSaga;
