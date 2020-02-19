import * as actionCreators from '../../actions/index'
import Axios from '../../../axios_posts'
import {put} from 'redux-saga/effects'

export function* fetchPostsSaga() {
    yield put(actionCreators.fetchPostsStart());
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
        const response = yield Axios.get('/posts', {headers: headers})
        yield put(actionCreators.postsFetchedSuccessfully(response.data));
    } catch (error) {
        console.log(error);
        yield put(actionCreators.postsCouldNotBeFetched(error.response.data.error));
    }
}
