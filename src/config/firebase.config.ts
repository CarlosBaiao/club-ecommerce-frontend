// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAztx1C_9EhVHpAvMr4aiv0053IU69EEWo',
  authDomain: 'club-ecommerce-72056.firebaseapp.com',
  projectId: 'club-ecommerce-72056',
  storageBucket: 'club-ecommerce-72056.appspot.com',
  messagingSenderId: '422747493667',
  appId: '1:422747493667:web:962aeee37c826a5509a896'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
