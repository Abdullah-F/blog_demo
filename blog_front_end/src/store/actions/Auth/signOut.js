import * as actionTypes from '../actionTypes'

export const signOut = ()=>{
    return {
        type: actionTypes.SIGN_OUT,
    }
}

export const logOut = ()=>{
    return {
        type: actionTypes.LOG_OUT,
    }
}

export const signOutAfterTimeExpires = (expires_in)=>{
    return {
        type: actionTypes.SIGN_OUT_COUNT_DOWN,
        expires_in: expires_in
    }
}