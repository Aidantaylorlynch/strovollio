import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getMerchants, getMenuItems } from '../services/merchantService';
import { createOrder } from '../services/orderService';
import { SET_MERCHANTS_ACTION_CREATOR, SET_MENU_ITEMS_ACTION_CREATOR, SET_LOGGED_IN_USER_ACTION_CREATOR } from '../store/actions';
import { GET_MERCHANTS, GET_MENU_ITEMS, CREATE_ORDER, LOGIN } from '../store/actionsTypes';
import { login } from '../services/loginService';

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
        console.log(menuItems)
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

function* loginUser() {
    try {
        const user = yield call(login)
        yield put(SET_LOGGED_IN_USER_ACTION_CREATOR(user))
    } catch (error) {
        console.log("error loginUser", error)
    }
}

export const saga = function*() {
    yield all([
        takeLatest(LOGIN, loginUser),
        takeLatest(CREATE_ORDER, postOrder),
        takeLatest(GET_MERCHANTS, fetchMerchants),
        takeLatest(GET_MENU_ITEMS, fetchMenuItems)
    ])
}