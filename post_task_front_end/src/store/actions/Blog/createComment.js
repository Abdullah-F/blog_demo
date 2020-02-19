import * as actionTypes from '../actionTypes'

export const createCommentInit = (data)=>{
    return {
        type: actionTypes.CREATE_COMMENT_INIT,
        data: data,
    }
}

export const createCommentStart = ()=>{
    return {
        type: actionTypes.CREATE_COMMENT_START,
    }
}

export const createCommentSuccess = (comment)=>{
    return {
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        comment: comment,
    }
}
export const createCommentFail = (errors)=>{
    return {
        type: actionTypes.CREATE_COMMENT_FAIL,
        errors: errors,
    }
}
