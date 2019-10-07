import { takeLatest, all, call, put } from 'redux-saga/effects'

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from './user.actions'
import userActionTypes from './user.types'
import { auth, googleProvider, createUser, getCurrentUser } from '../../firebase/firebase.utils'

export function * getSnapShotFromUserAuth (userAuth, additionalData) {
  try {
    const userRef = yield call(createUser, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    console.error('getSnapShotFromUserAuth errorL', error)
    yield put(signInFailure(error))
  }
}

function * signOut () {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    console.error('signOut error:', error)
    yield put(signOutFailure())
  }
}

function * signUp ({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess({ user, additionalData: { displayName } }))
  } catch (error) {
    console.error('signUp error:', error)
    yield put(signUpFailure())
    window.alert('signUp error:', error.message)
  }
}
function * singInAfterSignUp ({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData)
}

function * signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapShotFromUserAuth(user)
  } catch (error) {
    console.log('signInWithGoogle error:', error)
    yield put(signInFailure(error))
  }
}

function * signInWithEmail ({ payload: { email, password } }) {
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

export function * onSignOutStart () {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function * onSignUpStart () {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

function * onSignUpSuccess () {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, singInAfterSignUp)
}

export function * userRootSagas () {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}
