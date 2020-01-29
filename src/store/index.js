import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import auth from './auth'
import articles from './articles'
import article from './article'
import comments from './comments'
import tags from './tags'
import flags from './flags'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    articles,
    article,
    comments,
    tags,
    flags
  },
  mutations: {
    ...vuexfireMutations
  }
})
