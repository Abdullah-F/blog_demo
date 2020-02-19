import * as actionTypes from '../actionTypes'

export const signUp = (data) =>{
    return {
        type: actionTypes.SIGN_UP,
        data: data,
    }
}

export const signUpStart = ()=>{
    return {
        type: actionTypes.SIGN_UP_START,
    }
}

export const signUpSuccess = (data)=>{
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        data: data,
    }
}

export const signUpFail = (errors)=>{
    return {
        type: actionTypes.SIGN_UP_FAIL,
        errors: errors,
    }
}

export const clearSignUpData = ()=>{
    return{
        type: actionTypes.CLEAR_SIGN_UP_DATA,
    }
}