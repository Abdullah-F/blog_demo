import * as actionCreators from '../../actions/index'
import {put, delay} from 'redux-saga/effects'

export function* SignOutSaga() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate')
    yield localStorage.removeItem('userId');
    yield put(actionCreators.logOut());
}

export function* signOutCountDownSaga(action) {
    yield delay(action.expires_in*1000);
    yield put(actionCreators.logOut());
}
