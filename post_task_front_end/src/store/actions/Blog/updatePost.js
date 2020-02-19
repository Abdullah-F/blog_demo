import * as actionTypes from '../actionTypes'

export const updatePostInit = (data)=>{
    return {
        type: actionTypes.UPDATE_POST_INIT,
        data: data,
    }
}

export const updatePostStart = ()=>{
    return {
        type: actionTypes.UPDATE_POST_START,
    }
}

export const updatePostSuccess = (post)=>{
    return {
        type: actionTypes.UPDATE_POST_SUCCESS,
        post: post,
    }
}
export const updatePostFail = (errors)=>{
    return {
        type: actionTypes.UPDATE_POST_FAIL,
        errors: errors,
    }
}
