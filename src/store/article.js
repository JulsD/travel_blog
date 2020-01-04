import { firestoreAction } from 'vuexfire'
import db from '../db'

const articlesCollection = db.collection('articles');

const state = {
    article: {}
};

const actions = {
    initArticle: firestoreAction(({ bindFirestoreRef }, id) => {
        return bindFirestoreRef('article', articlesCollection.doc(id))
    })
}

export default {
    namespaced: true,
    state,
    actions
}