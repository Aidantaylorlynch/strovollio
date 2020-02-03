const initialState = {
    appTitle: "Strovollio",
    tableNumber: null,
    merchantID: null,
    merchants: [],
    cart: [],
    menu: []
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "TEST_ACTION":
            return {
                ...state
            }
        default:
            return state
    }
}