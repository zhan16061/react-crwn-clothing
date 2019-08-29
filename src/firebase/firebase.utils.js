import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
}
export const createUser = async (userAuth, additionData) => {
  if(!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnapShot = await userRef.get()

  if(userSnapShot.exists) return userRef

  const { displayName, email } = userAuth
  const createAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createAt,
      ...additionData
    })
  } catch (error) {
    console.log('error createUser', error.message)
    alert(error.message)
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
