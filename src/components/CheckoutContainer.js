import { connect } from 'react-redux';
import { Checkout } from './Checkout'

const mapStateToProps = (state) => {
    return {
        selectedMerchant: state.selectedMerchant,
        tableNumber: state.tableNumber,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const CheckoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout)