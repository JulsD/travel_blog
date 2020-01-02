import { firestoreAction } from 'vuexfire'
import db from '../db'

const articles = db.collection('articles');

const state = {
    article: {},
};

const actions = {
    // async createArticle(_, article) {
    //     const result = articles.doc();
    //     article.id = result.id;
    //     // article.user_id = 
    //     // article.created_at = 
    //     // article.updated_at = 
    //     articles.doc(article.id).set(article);
    // },
    init: firestoreAction(({ bindFirestoreRef }, name) => {
        return bindFirestoreRef('article', articles.where('name', '==', name))
    }),
}

export default {
    namespaced: true,
    state,
    actions
}