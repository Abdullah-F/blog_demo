import * as actionCreators from '../../actions/index'
import Axios from '../../../axios_posts'
import { put } from 'redux-saga/effects'

export function* createCommentSaga(action) {
    yield put(actionCreators.createCommentStart());
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
        let response = yield Axios.post(`posts/${action.data.post_id}/comments`, { comment: action.data.comment }, { headers: headers })
        yield put(actionCreators.createCommentSuccess(response.data));
        alert('comment is added')
    } catch (error) {
        yield put(actionCreators.createCommentFail(error.response.data.error));
        alert('faild to create comment Error : ' + error)
    }
}
