import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC2YqKNRNt7WkvaZ5fWtLcfHcrc54FrLb4',
  authDomain: 'crwn-db-5b395.firebaseapp.com',
  databaseURL: 'https://crwn-db-5b395.firebaseio.com',
  projectId: 'crwn-db-5b395',
  storageBucket: 'crwn-db-5b395.appspot.com',
  messagingSenderId: '771376045836',
  appId: '1:771376045836:web:dd3471e99f92106f'
}
export const createUser = async (userAuth, additionData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const userSnapShot = await userRef.get()

  if (userSnapShot.exists) return userRef

  const { displayName, email } = userAuth
  const createAt = new Date()

  try {
    await userRef.set({
      displayName,
      email,
      createAt,
      ...additionData
    })
  } catch (error) {
    console.error('error createUser', error)
    alert(error.message)
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      unsubscribe();
      resolve(userAuth)
    }, reject)
  })
}
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  try {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })
    return await batch.commit()
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
}

export const convertCollectionsSanpshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
