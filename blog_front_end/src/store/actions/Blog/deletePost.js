import * as actionTypes from '../actionTypes'

export const deletePostInit = (postId)=>{
    return {
        type: actionTypes.DELETE_POST_INIT,
        postId: postId,
    }
}

export const deletePostStart = ()=>{
    return {
        type: actionTypes.DELETE_POST_START,
    }
}

export const deletePostSuccess = (postId)=>{
    return {
        type: actionTypes.DELETE_POST_SUCCESS,
        postId: postId,
    }
}
export const deletePostFail = (errors)=>{
    return {
        type: actionTypes.DELETE_POST_FAIL,
        errors: errors,
    }
}
