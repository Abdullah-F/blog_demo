import * as actionTypes from '../actionTypes'

export const signIn = (data) =>{
    return {
        type: actionTypes.SIGN_IN,
        data: data,
    }
}

export const signInStart = ()=>{
    return {
        type: actionTypes.SIGN_IN_START,
    }
}

export const signInSuccess = (data)=>{
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        data: data,
    }
}

export const signInFail = (errors)=>{
    return {
        type: actionTypes.SIGN_IN_FAIL,
        errors: errors,
    }
}