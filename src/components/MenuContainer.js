import { connect } from 'react-redux';
import { Menu } from './Menu';
import { GET_MENU_ITEMS_ACTION_CREATOR, ADD_MENU_ITEM_TO_CART_ACTION_CREATOR, REMOVE_MENU_ITEM_FROM_CART_ACTION_CREATOR } from '../store/actions';

const mapStateToProps = (state) => {
    return {
		loggedIn: state.loggedIn,
        title: state.appTitle,
        merchants: state.merchants,
        selectedMerchant: state.selectedMerchant,
		tableNumber: state.tableNumber,
		menuItems: state.menuItems,
		cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMenuItems: (merchantID) => {
			return dispatch(GET_MENU_ITEMS_ACTION_CREATOR(merchantID))
		},
		addMenuItemToCart: (menuItem) => {
			return dispatch(ADD_MENU_ITEM_TO_CART_ACTION_CREATOR(menuItem))
		},
		removeMenuItemFromCart: (menuItem) => {
			return dispatch(REMOVE_MENU_ITEM_FROM_CART_ACTION_CREATOR(menuItem))
		}
	}
}

export const MenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu)