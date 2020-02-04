import { call, put, takeLatest } from 'redux-saga/effects';
import { getMerchants } from '../services/merchantService';
import { SET_MERCHANTS_ACTION_CREATOR } from '../store/actions';
import { GET_MERCHANTS } from '../store/actionsTypes';

function* fetchMerchants() {
    try {
        const merchants = yield call(getMerchants);
        yield put(SET_MERCHANTS_ACTION_CREATOR(merchants))
    } catch (error) {
        console.log("error fetchMerchants", error)
    }
}

export const saga = function*() {
    yield takeLatest(GET_MERCHANTS, fetchMerchants);
}