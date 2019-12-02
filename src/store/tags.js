import { firestoreAction } from 'vuexfire'
import db from '../db'

const state = {
    tags: [],
};

const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('tags', db.collection('tags'))
    }),
}

export default {
    namespaced: true,
    state,
    actions
}