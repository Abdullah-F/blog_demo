import * as actionTypes from '../actionTypes'

export const tagsInit = ()=>{
    return {
        type: actionTypes.TAGS_INIT,
    }
}

export const fetchTagsStart = ()=>{
    return {
        type: actionTypes.FETCH_TAGS_START,
    }
}
export const tagsFetchedSuccessfully = (tags)=>{
    return {
        type: actionTypes.TAGS_FETCHED_SUCCESSFULLY,
        tags: tags,
    }
}
export const tagsCouldNotBeFetched = (errors)=>{
    return {
        type: actionTypes.TAGS_COULD_NOT_BE_FETCHED,
        errors: errors
    }
}