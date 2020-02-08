import { connect } from 'react-redux';
import { Checkout } from './Checkout'
import { CREATE_ORDER_ACTION_CREATOR } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        selectedMerchant: state.selectedMerchant,
        tableNumber: state.tableNumber,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (merchantID, userID, menuItems) => {
            return dispatch(CREATE_ORDER_ACTION_CREATOR(merchantID, userID, menuItems))
        }
    }
}

export const CheckoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout)