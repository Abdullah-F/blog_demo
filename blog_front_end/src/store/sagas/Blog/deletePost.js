import * as actionCreators from '../../actions/index'
import Axios from '../../../axios_posts'
import { put } from 'redux-saga/effects'

export function* deletePostSaga(action) {
    yield put(actionCreators.deletePostStart());
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
        yield Axios.delete(`posts/${action.postId}`, { headers: headers })
        yield put(actionCreators.deletePostSuccess(action.postId));
        alert('post is deleted with the selected tags')
    } catch (error) {
        yield put(actionCreators.deletePostFail(error.response.data.error));
        alert('faild to delete post Error : ' + error)
    }
}