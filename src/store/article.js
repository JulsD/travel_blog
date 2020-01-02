import { firestoreAction, firebaseAction } from 'vuexfire'
import db from '../db'

const articles = db.collection('articles');

const state = {
    article: {}
};

const getters = {
    comments: (state) => state.article.comments || []
}

const actions = {
    async createComment(_, comment) {
        const result = comment.doc();
        comment.id = result.id;
        // comment.user_id = 
        // comment.created_at = 
        // comment.updated_at = 
        await comment.doc(comment.id).set(comment);
    },
    initArticle: firestoreAction(({ bindFirestoreRef }, id) => {
        // const result = bindFirestoreRef('articles', articles.where('name', '==', name))
        return bindFirestoreRef('article', articles.doc(id))
    })
}

export default {
    namespaced: true,
    state,
    actions,
    getters
}