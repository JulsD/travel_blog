import { firestoreAction } from 'vuexfire'
import db from '../db'

const articles = db.collection('articles');

const state = {
    articles: [],
};

const getters = {
    article: (state) => state.articles[0] ? state.articles[0] : {}
}

const actions = {
    // async createArticle(_, article) {
    //     const result = articles.doc();
    //     article.id = result.id;
    //     // article.user_id = 
    //     // article.created_at = 
    //     // article.updated_at = 
    //     articles.doc(article.id).set(article);
    // },
    initArticle: firestoreAction(({ bindFirestoreRef }, name) => {
        return bindFirestoreRef('articles', articles.where('name', '==', name))
    })
}

export default {
    namespaced: true,
    state,
    actions,
    getters
}