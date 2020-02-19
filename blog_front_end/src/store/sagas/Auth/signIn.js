import * as actionCreators from '../../actions/index'
import Axios from 'axios'
import {put} from 'redux-saga/effects'

export function* SignInSaga(action) {
    yield put(actionCreators.signInStart());
    const signInData = {
        ...action.data,
    };
    try {
        const response = yield Axios.post('http://localhost:3000/authenticate', signInData)
        const expirationDate = yield new Date(new Date().getTime() + response.data.expires_in * 1000)
        yield localStorage.setItem('token', response.data.JWTtoken);
        yield localStorage.setItem('expirationDate', expirationDate)
        yield localStorage.setItem('userId', response.data.id);
        yield put(actionCreators.signInSuccess(response.data));
        yield put(actionCreators.signOutAfterTimeExpires(response.data.expires_in))
    } catch (error) {
        console.log(error);
        yield put(actionCreators.signInFail(error.response.data.error));
    }
}
