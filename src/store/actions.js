import {
    GET_MERCHANTS,
    SET_MERCHANTS,
    SET_SELECTED_MERCHANT,
    SET_TABLE_NUMBER,
    GET_MENU_ITEMS,
    SET_MENU_ITEMS,
    ADD_MENU_ITEM_TO_CART,
    REMOVE_MENU_ITEM_FROM_CART
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

export const ADD_MENU_ITEM_TO_CART_ACTION_CREATOR = (menuItem) => {
    return {
        type: ADD_MENU_ITEM_TO_CART,
        payload: {
            menuItem
        }
    }
}

export const REMOVE_MENU_ITEM_FROM_CART_ACTION_CREATOR = (menuItem) => {
    return {
        type: REMOVE_MENU_ITEM_FROM_CART,
        payload: {
            menuItem
        }
    }
}