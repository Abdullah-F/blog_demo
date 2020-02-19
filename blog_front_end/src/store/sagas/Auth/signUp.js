import * as actionCreators from '../../actions/index'
import Axios from 'axios'
import {put} from 'redux-saga/effects'

export function* SignUpSaga(action) {
    yield put(actionCreators.signUpStart());
    console.log('[from sing upp saga ]', action.data)
    try {
        const response = yield Axios.post('http://localhost:3000/users', action.data)
        yield put(actionCreators.signUpSuccess(response.data));
    } catch (error) {
        yield put(actionCreators.signUpFail(error.response.data.error));
    }
}