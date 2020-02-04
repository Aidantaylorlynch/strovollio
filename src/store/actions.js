import {
    GET_MERCHANTS,
    SET_MERCHANTS,
    SET_SELECTED_MERCHANT,
    SET_TABLE_NUMBER,
    GET_MENU_ITEMS,
    SET_MENU_ITEMS
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
    console.log("action",merchant)
    return {
        type: SET_SELECTED_MERCHANT,
        payload: {
            merchant
        }
    }
}

export const SET_TABLE_NUMBER_ACTION_CREATOR = (tableNumber) => {
    console.log("setting table number")
    return {
        type: SET_TABLE_NUMBER,
        payload: {
            tableNumber
        }
    }
}

export const SET_MENU_ITEMS_ACTION_CREATOR = (menuItems) => {
    return {
        type: SET_MENU_ITEMS,
        payload: {
            menuItems
        }
    }
}

export const GET_MENU_ITEMS_ACTION_CREATOR = (merchantID) => {
    return {
        type: GET_MENU_ITEMS,
        payload: {
            merchantID
        }
    }
}