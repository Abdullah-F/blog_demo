import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    errors: null,
    token: null,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SIGN_IN_START):
            return {
                ...state,
                errors: null,
            };
        case (actionTypes.SIGN_IN_SUCCESS):
            return {
                ...state,
                token: action.data.JWTtoken,
                errors: null,
                user: {
                    name: action.data.name,
                    id: action.data.id,
                    email: action.data.email,
                },
            };
        case (actionTypes.SIGN_IN_FAIL):
            return {
                ...state,
                errors: action.errors,
            };
        case (actionTypes.LOG_OUT):
            return {
                ...state,
                errors: null,
                token: null,
                user: null,
            };
        default:
            return state;

    }
}

export default reducer;