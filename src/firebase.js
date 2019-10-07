import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBoAy_meO4nWDKNKOv3vm6EcAD5cnlUH3I",
  authDomain: "travel-blog-d410c.firebaseapp.com",
  databaseURL: "https://travel-blog-d410c.firebaseio.com",
  projectId: "travel-blog-d410c",
  storageBucket: "",
  messagingSenderId: "461852466816",
  appId: "1:461852466816:web:837f03b68fa81370b1d065",
  measurementId: "G-EZFJ0LQGNH"
}

firebase.initializeApp(firebaseConfig);

export default firebase;