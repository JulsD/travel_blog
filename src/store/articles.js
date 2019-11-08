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

export default {
    namespaced: true,
    state,
    actions
}