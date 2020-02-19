import * as actionCreators from '../../actions/index'
import Axios from '../../../axios_posts'
import { put } from 'redux-saga/effects'

export function* createPostSaga(action) {
    yield put(actionCreators.createPostStart());
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
        let response = yield Axios.post('posts', { post: action.data.post }, { headers: headers })
        response = yield Axios.post(`posts/${response.data.id}/add_tags`, { tags: action.data.tags }, { headers: headers })
        yield put(actionCreators.createPostSuccess(response.data));
        alert('post is created with the selected tags')
    } catch (error) {
        yield put(actionCreators.createPostFail(error.response.data.error));
        alert('faild to create post Error : ' + error)
    }
}
