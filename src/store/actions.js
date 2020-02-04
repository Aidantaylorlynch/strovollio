import {
    GET_MERCHANTS,
    SET_MERCHANTS,
    SET_SELECTED_MERCHANT,
    SET_TABLE_NUMBER
} from './actionsTypes';

export const GET_MERCHANTS_ACTION_CREATOR = () => {
    return {
        type: GET_MERCHANTS
    }
}

export const SET_MERCHANTS_ACTION_CREATOR = (merchants) => {
    return {
        type: SET_MERCHANTS,
        payload: {
            merchants
        }
    }
}

export const SET_SELECTED_MERCHANT_ACTION_CREATOR = (merchant) => {
    return {
        type: SET_SELECTED_MERCHANT,
        payload: {
            merchant
        }
    }
}

export const SET_TABLE_NUMBER_ACTION_CREATOR = (tableNumber) => {
    return {
        type: SET_SELECTED_MERCHANT,
        payload: {
            tableNumber
        }
    }
}