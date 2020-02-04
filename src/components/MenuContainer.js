import { connect } from 'react-redux';
import { Menu } from './Menu';
import { GET_MENU_ITEMS_ACTION_CREATOR } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        title: state.appTitle,
        merchants: state.merchants,
        selectedMerchant: state.selectedMerchant,
		tableNumber: state.tableNumber,
		menuItems: state.menuItems
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMenuItems: (merchantID) => {
			return dispatch(GET_MENU_ITEMS_ACTION_CREATOR(merchantID))
		}
	}
}

export const MenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu)