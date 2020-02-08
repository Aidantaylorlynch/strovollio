import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getMerchants, getMenuItems } from '../services/merchantService';
import { createOrder } from '../services/orderService';
import { SET_MERCHANTS_ACTION_CREATOR, SET_MENU_ITEMS_ACTION_CREATOR } from '../store/actions';
import { GET_MERCHANTS, GET_MENU_ITEMS, CREATE_ORDER } from '../store/actionsTypes';

function* fetchMerchants() {
    try {
        const merchants = yield call(getMerchants);
        yield put(SET_MERCHANTS_ACTION_CREATOR(merchants))
    } catch (error) {
        console.log("error fetchMerchants", error)
    }
}

function* fetchMenuItems(action) {
    try {
        const menuItems = yield call(getMenuItems, action.payload.merchantID)
        yield put(SET_MENU_ITEMS_ACTION_CREATOR(menuItems))
    } catch (error) {
        console.log("error fetchMenuItems", error)
    }
}

function* postOrder(action) {
    try {
        console.log("posting order from saga", action)
        const order = {
            ...action.payload
        }
        const orderRequest = yield call(createOrder, order)
    } catch (error) {
        console.log("error postORder", error)
    }
}

export const saga = function*() {
    yield all([
        takeLatest(CREATE_ORDER, postOrder),
        takeLatest(GET_MERCHANTS, fetchMerchants),
        takeLatest(GET_MENU_ITEMS, fetchMenuItems)
    ])
}