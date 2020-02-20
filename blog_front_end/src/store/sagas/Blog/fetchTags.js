import * as actionCreators from '../../actions/index'
import Axios from '../../../axios_posts'
import {put} from 'redux-saga/effects'

export function* fetchTagsSaga() {
    yield put(actionCreators.fetchTagsStart());
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
        const response = yield Axios.get('/tags', {headers: headers})
        yield put(actionCreators.tagsFetchedSuccessfully(response.data));
    } catch (error) {
        yield put(actionCreators.tagsCouldNotBeFetched(error.response.data.error));
    }
}
