import { firestoreAction, firebaseAction } from 'vuexfire'
import firebase from '../firebase';
import 'firebase/database';
import db from '../db'

const articlesCollection = db.collection('articles');
const commentsCollection = db.collection('comments');

const state = {
    article: {},
    comments: {}
};

const actions = {
    async createComment({state}, comment) {
        const result = commentsCollection.doc();
        comment.id = result.id;
        comment.article_id = state.article.id;
        comment.user_id = firebase.auth().currentUser.uid;
        comment.created_at = firebase.firestore.FieldValue.serverTimestamp();
        comment.updated_at = firebase.firestore.FieldValue.serverTimestamp();
        comment.starCount = 0;

        await commentsCollection.doc(comment.id).set(comment);
    },
    initArticle: firestoreAction(({ bindFirestoreRef }, id) => {
        return bindFirestoreRef('article', articlesCollection.doc(id))
    }),
    initComments: firestoreAction(({ bindFirestoreRef }, id) => {
        return bindFirestoreRef('comments', commentsCollection.where('article_id', '==', id).orderBy('created_at', 'desc'))
    })
}

export default {
    namespaced: true,
    state,
    actions
}