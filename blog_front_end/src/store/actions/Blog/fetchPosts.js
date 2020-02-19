import * as actionTypes from '../actionTypes'

export const postsInit = ()=>{
    return {
        type: actionTypes.POSTS_INIT,
    }
}

export const fetchPostsStart = ()=>{
    return {
        type: actionTypes.FETCH_POSTS_START,
    }
}
export const postsFetchedSuccessfully = (posts)=>{
    return {
        type: actionTypes.POSTS_FETCHED_SUCCESSFULLY,
        posts: posts,
    }
}
export const postsCouldNotBeFetched = (errors)=>{
    return {
        type: actionTypes.POSTS_COULD_NOT_BE_FETCHED,
        errors: errors
    }
}