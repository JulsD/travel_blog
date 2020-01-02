import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import auth from './auth'
import articles from './articles'
import article from './article'
import tags from './tags'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    articles,
    article,
    tags
  },
  mutations: {
    ...vuexfireMutations
  }
})
