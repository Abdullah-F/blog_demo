import * as actionCreators from '../../actions/index'
import Axios from '../../../axios_posts'
import { put } from 'redux-saga/effects'

export function* updatePostSaga(action) {
    yield put(actionCreators.updatePostStart());
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
        let response = yield Axios.put(`posts/${action.data.post.id}`, { post: action.data.post }, { headers: headers })
        response = yield Axios.post(`posts/${response.data.id}/add_tags`, { tags: action.data.tags }, { headers: headers })
        yield put(actionCreators.updatePostSuccess(response.data));
        alert('post is updated with the selected tags')
    } catch (error) {
        yield put(actionCreators.updatePostFail(error.response.data.error));
        alert('faild to update post Error : ' + error)
    }
}
