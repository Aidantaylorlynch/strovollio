import { SET_MERCHANTS, SET_SELECTED_MERCHANT, SET_TABLE_NUMBER, SET_MENU_ITEMS, ADD_MENU_ITEM_TO_CART, REMOVE_MENU_ITEM_FROM_CART } from './actionsTypes';

const initialState = {
    appTitle: "Strovollio",
    tableNumber: null,
    selectedMerchant: null,
    merchants: [],
    cart: [],
    menuItems: []
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
        case SET_MENU_ITEMS:
            return {
                ...state,
                menuItems: action.payload.menuItems
            }
        case ADD_MENU_ITEM_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload.menuItem]
            }
        case REMOVE_MENU_ITEM_FROM_CART:
            let itemRemoved = false;
            return {
                ...state,
                cart: state.cart.filter((menuItem) => {
                    if (itemRemoved) {
                        return menuItem;
                    } else {
                        if (menuItem.menuItemID === action.payload.menuItem.menuItemID) {
                            itemRemoved = true;
                        }
                        return menuItem.menuItemID !== action.payload.menuItem.menuItemID;
                    }
                })
            }
        default:
            return state
    }
}