import { SET_MERCHANTS, SET_SELECTED_MERCHANT, SET_TABLE_NUMBER } from './actionsTypes';

const initialState = {
    appTitle: "Strovollio",
    tableNumber: null,
    selectedMerchant: null,
    merchants: [],
    cart: [],
    menu: []
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_MERCHANTS:
            return {
                ...state,
                merchants: action.payload.merchants
            }
        case SET_SELECTED_MERCHANT:
            return {
                ...state,
                selectedMerchant: action.payload.merchant
            }
        case SET_TABLE_NUMBER:
            return {
                ...state,
                tableNumber: action.payload.tableNumber
            }
        default:
            return state
    }
}