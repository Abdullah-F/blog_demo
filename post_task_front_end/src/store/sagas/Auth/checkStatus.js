import * as actionCreators from '../../actions/index'
import {put} from 'redux-saga/effects'

export function* checkAuthStatusSaga(){
    const token = localStorage.getItem('token');
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('email');
    const remainingTimeInSeconds = Math.floor((expirationDate-new Date())/1000);
    if (!token) {
        yield put(actionCreators.logOut());
    } else {
        if (expirationDate > new Date()) {
            const data = {id: userId, name: userName, email: email, JWTtoken: token}
            yield put(actionCreators.signInSuccess(data));
            yield put(actionCreators.signOutAfterTimeExpires(remainingTimeInSeconds));
        }
    }
}