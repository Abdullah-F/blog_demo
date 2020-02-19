import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    posts: null,
    errors: null,
    tags: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_POSTS_START):
            return {
                ...state,
                posts: null,
                errors: null,
            };
        case (actionTypes.POSTS_FETCHED_SUCCESSFULLY):
            return {
                ...state,
                posts: action.posts,
                errors: null,
            };
        case (actionTypes.POSTS_COULD_NOT_BE_FETCHED):
            return {
                ...state,
                posts: null,
                errors: action.errors,
            };
        case (actionTypes.FETCH_TAGS_START):
            return {
                ...state,
                tags: null,
                errors: null,
            };
        case (actionTypes.TAGS_FETCHED_SUCCESSFULLY):
            return {
                ...state,
                tags: action.tags,
                errors: null,
            };
        case (actionTypes.TAGS_COULD_NOT_BE_FETCHED):
            return {
                ...state,
                tags: null,
                errors: action.errors,
            };
        case (actionTypes.CREATE_POST_START):
            return {
                ...state,
                errors: null,
            }
        case (actionTypes.CREATE_POST_SUCCESS):
            return {
                ...state,
                posts: [action.post, ...state.posts],
                errors: null
            }
        case (actionTypes.CREATE_POST_FAIL):
            return {
                ...state,
                errors: action.errors,
            }
        case (actionTypes.UPDATE_POST_START):
            return {
                ...state,
                errors: null,
            }
        case (actionTypes.UPDATE_POST_SUCCESS):
            return {
                ...state,
                posts: [action.post, ...state.posts.filter((p) => p.id !== action.post.id)],
                errors: null,
            }
        case (actionTypes.UPDATE_POST_FAIL):
            return {
                ...state,
                errors: action.errors,
            }
        case (actionTypes.DELETE_POST_START):
            return {
                ...state,
                errors: null,
            }
        case (actionTypes.DELETE_POST_SUCCESS):
            return {
                ...state,
                posts: [...state.posts.filter((p) => p.id !== action.postId)],
                errors: null,
            }
        case (actionTypes.DELETE_POST_FAIL):
            return {
                ...state,
                errors: action.errors,
            }
        case (actionTypes.CREATE_COMMENT_START):
            return {
                ...state,
                errors: null,
            }
        case (actionTypes.CREATE_COMMENT_SUCCESS):
            return {
                ...state,
                posts://the bleow lines are garbage code. 
                      // all code in reducers is garbage code. but eccepted since it is a task.
                      // all code must be dried later
                    [...state.posts.filter((p) => p.id !== action.comment.post_id),
                    {
                        ...state.posts.find((p) => p.id === action.comment.post_id),
                        comments:[
                            ...state.posts.find((p) => p.id === action.comment.post_id).comments,
                        action.comment]
                    }
                    ],
                errors: null
            }
        case (actionTypes.CREATE_COMMENT_FAIL):
            return {
                ...state,
                errors: action.errors,
            }

        default:
            return state;
    }
}

export default reducer;