import Vue from 'vue';
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../firebase'

import auth from './auth'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
    // state: {
    //     count: 0
    //   },
    //   mutations: {
    //     increment (state) {
    //       state.count++
    //     },
    //     ...vuexfireMutations
    //   },
    //   actions: {
    //     bindArticles: firestoreAction(({ bindFirestoreRef }) => {
    //       return bindFirestoreRef('articles', db.collection('articles'))
    //     }),
    //     unbindArticles: firestoreAction(({ unbindFirestoreRef }) => {
    //       unbindFirestoreRef('articles')
    //     })
    //   }
})