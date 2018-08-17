import firebase from 'firebase/app';

export const LOGIN = "LOGIN"
export const SIGNUP = "SIGNUP"
export const LOGOUT = "LOGOUT"

const login = token => ({ type: LOGIN, token })

export const loginAsync = token => dispatch => dispatch(login(token))

const signUp = (e, p) => ({ type: SIGNUP, e, p })

export const signUpAsync = (e, p) => dispatch => dispatch(signUp(e, p))

export const logout = () => ({
    type: LOGOUT
});

export const startLogout = () => {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => dispatch(logout()))
    }
};