import { firestoreAction } from 'vuexfire'
import db from '../db'

const state = {
    articles: [],
};

const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('articles', db.collection('articles'))
    }),
}

const getters = {
    releasedArticles: state => {
        return state.articles.filter(a => !a.draft);
    },
    draftArticles: state => {
        return state.articles.filter(a => a.draft);
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters
}