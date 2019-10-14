import firebase from './../firebase'
import store from './../store'
import db from './../db'

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const profile = {
            id: user.uid,
            name: user.displayName,
            image: user.photoURL,
            created_at: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('users').doc(profile.id).set(profile);
        store.commit('auth/setUser', profile)
    } else {
        store.commit('auth/setUser', null)
    }
});
