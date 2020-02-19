import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { SignUpSaga } from './Auth/signUp'
import { SignInSaga } from './Auth/signIn'
import { SignOutSaga, signOutCountDownSaga } from './Auth/signOut';
import { checkAuthStatusSaga } from './Auth/checkStatus'
import { fetchPostsSaga } from './Blog/fetchPosts'
import { fetchTagsSaga } from './Blog/fetchTags';
import { createPostSaga } from './Blog/createPost';
import { updatePostSaga } from './Blog/updatePost';
import { deletePostSaga } from './Blog/deletePost';
import { createCommentSaga } from './Blog/createComment';
export function* watchAuth(){
    yield takeEvery(actionTypes.SIGN_UP, SignUpSaga)
    yield takeEvery(actionTypes.SIGN_IN, SignInSaga)
    yield takeEvery(actionTypes.SIGN_OUT, SignOutSaga)
    yield takeEvery(actionTypes.SIGN_OUT_COUNT_DOWN, signOutCountDownSaga)
    yield takeEvery(actionTypes.CHECK_AUTH_STATUS, checkAuthStatusSaga)
}

export function* watchBlog(){
    yield takeEvery(actionTypes.POSTS_INIT, fetchPostsSaga)
    yield takeEvery(actionTypes.TAGS_INIT, fetchTagsSaga)
    yield takeEvery(actionTypes.CREATE_POST_INIT, createPostSaga)
    yield takeEvery(actionTypes.UPDATE_POST_INIT, updatePostSaga)
    yield takeEvery(actionTypes.DELETE_POST_INIT, deletePostSaga)
    yield takeEvery(actionTypes.CREATE_COMMENT_INIT, createCommentSaga)
}

