import { UserDetail } from './UserDetail';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        title: state.appTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const UserDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetail)