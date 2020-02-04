import { connect } from 'react-redux';
import { Menu } from './Menu';

const mapStateToProps = (state) => {
	return {
		title: state.appTitle
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export const MenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu)