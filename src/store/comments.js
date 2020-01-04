import { firestoreAction } from 'vuexfire'
import firebase from '../firebase';
import db from '../db'

const commentsCollection = db.collection('comments');

const state = {
    comments: []
};

const actions = {
    async createComment(_, comment) {
        const result = commentsCollection.doc();
        comment.id = result.id;
        comment.user_id = firebase.auth().currentUser.uid;
        comment.created_at = firebase.firestore.FieldValue.serverTimestamp();
        comment.updated_at = firebase.firestore.FieldValue.serverTimestamp();
        comment.starCount = 0;

        await commentsCollection.doc(comment.id).set(comment);
    },
    initComments: firestoreAction(({ bindFirestoreRef }, id) => {
        return bindFirestoreRef('comments', commentsCollection.where('article_id', '==', id).orderBy('created_at', 'desc'))
    })
}

export default {
    namespaced: true,
    state,
    actions
}