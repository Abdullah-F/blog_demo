import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    errors: null,
    data: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SIGN_UP_START):
            return {
                ...state,
                errors: null,
            };
        case (actionTypes.SIGN_UP_SUCCESS):
            return {
                ...state,
                errors: null,
                data: action.data,
            };
        case (actionTypes.SIGN_UP_FAIL):
            return {
                ...state,
                errors: action.errors,
            };
        case (actionTypes.CLEAR_SIGN_UP_DATA):
            return {
                ...state,
                errors: null,
                data: null,
            }
        default:
            return state;

    }
}

export default reducer;