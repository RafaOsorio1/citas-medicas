import {db} from './firebase'
import { auth } from './firebase'
import { collection, doc, setDoc} from 'firebase/firestore'

const data = getUserInfo();

await setDoc(doc(db, 'Users', 'mercaderes' ), {
    email: data?.email,
    uid: data?.uid,
    name: 'name',
    citas: []
})


function getUserInfo() {
  const user = auth.currentUser
  if (user) {
    const { email, uid } = user
    return { email, uid }
  } else {
    return null
  }
}