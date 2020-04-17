import { firestoreAction } from 'vuexfire';
import firebase from '../firebase';
import db from '../db';

const articlesCollection = db.collection('articles');

const state = {
    article: {}
};

const actions = {
    initArticle: firestoreAction(({ bindFirestoreRef }, id) => {
        return bindFirestoreRef('article', articlesCollection.doc(id))
    }),
    async createArticle(_, article) {
        const result = articlesCollection.doc();
        article.id = result.id;
        article.author = {};
        article.author.id = firebase.auth().currentUser.uid;
        article.author.name = firebase.auth().currentUser.displayName;
        article.created_at = firebase.firestore.FieldValue.serverTimestamp();
        article.updated_at = firebase.firestore.FieldValue.serverTimestamp();
        article.starCount = 0;

        await articlesCollection.doc(article.id).set(article);

        return article;
    },
}

export default {
    namespaced: true,
    state,
    actions
}