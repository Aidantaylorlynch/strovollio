import { UserDetail } from './UserDetail';
import { connect } from 'react-redux';
import { GET_MERCHANTS_ACTION_CREATOR, SET_SELECTED_MERCHANT_ACTION_CREATOR, SET_TABLE_NUMBER_ACTION_CREATOR } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        title: state.appTitle,
        merchants: state.merchants,
        selectedMerchant: state.selectedMerchant,
        tableNumber: state.tableNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMerchants: () => {
            return dispatch(GET_MERCHANTS_ACTION_CREATOR())
        },
        setSelectedMerchant: (merchant) => {
            return dispatch(SET_SELECTED_MERCHANT_ACTION_CREATOR(merchant))
        },
        setTableNumber: (tableNumber) => {
            return dispatch(SET_TABLE_NUMBER_ACTION_CREATOR(tableNumber))
        }
    }
}

export const UserDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetail)