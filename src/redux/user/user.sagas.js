import { takeLatest, all, call, put } from 'redux-saga/effects'

import { signInSuccess, signInFailure } from './user.actions'
import userActionTypes from './user.types'
import { auth, googleProvider, createUser, getCurrentUser } from '../../firebase/firebase.utils'

export function * getSnapShotFromUserAuth (userAuth) {
  try {
    const userRef = yield call(createUser, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    console.error('getSnapShotFromUserAuth errorL', error)
    yield put(signInFailure(error))
  }
}

export function * signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapShotFromUserAuth(user)
  } catch (error) {
    console.log('signInWithGoogle error:', error)
    yield put(signInFailure(error))
  }
}

export function * signInWithEmail ({ payload: { email, password } }) {
  try {
    // const aaa = yield call(auth.signInWithEmailAndPassword, email, password) not work
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapShotFromUserAuth(user)
  } catch (error) {
    console.log('signInWithEmail error:', error)
    yield put(signInFailure(error))
  }
}

export function * isUserAuthenticated () {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapShotFromUserAuth(userAuth)
  } catch (error) {
    console.error('isUserAuthenticated error:', error)
    yield put(signInFailure(error))
  }
}

export function * onGoogleSignInStart () {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function * onEmailSignInStart () {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function * onCheckUserSession () {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function * userRootSagas () {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession)
  ])
}
