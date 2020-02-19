import * as actionTypes from '../actionTypes'

export const createPostInit = (data)=>{
    return {
        type: actionTypes.CREATE_POST_INIT,
        data: data,
    }
}

export const createPostStart = ()=>{
    return {
        type: actionTypes.CREATE_POST_START,
    }
}

export const createPostSuccess = (post)=>{
    return {
        type: actionTypes.CREATE_POST_SUCCESS,
        post: post,
    }
}
export const createPostFail = (errors)=>{
    return {
        type: actionTypes.CREATE_POST_FAIL,
        errors: errors,
    }
}
