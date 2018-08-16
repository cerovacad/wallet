import { LOGIN, LOGOUT } from "../actions/authActions";

const defState = {};

export default (state = defState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                token: action.token
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};