import { connect } from 'react-redux';
import { Login } from './Login'
import { LOGIN_ACTION_CREATOR } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        title: state.appTitle,
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            return dispatch(LOGIN_ACTION_CREATOR())
        }
    }
}

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)