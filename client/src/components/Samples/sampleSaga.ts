import { Action } from 'redux-actions';
import { call, takeLatest, all, put } from 'redux-saga/effects';

import { ICreateAction, IGetAction, IDeleteAction, ISample } from 'src/interfaces/Samples/sampleSaga';
import { SampleApi } from 'src/services/api/SampleApi';

import {
  saveSamplesData,
  saveSampleData,
  deleteSample,
  getSamples,
  createSample,
  getSample,
} from './sampleAction';

export function* getSamplesSaga() {
  try {
    const data: ISample[] = yield call([SampleApi, 'getSamples']);
    yield put(saveSamplesData(data));
  } catch (e) {
    yield put(saveSamplesData([]));
  }
};

export function* getSampleSaga(action: Action<IGetAction>) {
  try {
    const id = action.payload.id;
    const data: ISample = yield call([SampleApi, 'getSample'], id);
    yield put(saveSampleData(data));
  } catch (e) {
    yield put(saveSampleData({}));
  }
};

export function* createSampleSaga(action: Action<ICreateAction>) {
  try {
    const { payload } = action;
    yield call([SampleApi, 'createSample'], payload);
  } catch (e) {
    //handle error
  }
}

export function* deleteSampleSaga(action: Action<IDeleteAction>) {
  try {
    const { payload: { id } } = action;
    yield call([SampleApi, 'deleteSample'], id);
  } catch (e) {
    //handle error
  }
}

export default function* SampleSagas() {
  yield all([
    takeLatest(getSamples, getSamplesSaga),
    takeLatest(getSample, getSampleSaga),
    takeLatest(createSample, createSampleSaga),
    takeLatest(deleteSample, deleteSampleSaga),
  ]);
}
