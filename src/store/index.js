import { createStore } from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import auth from './auth'
import articles from './articles'
import article from './article'
import comments from './comments'
import tags from './tags'
import flags from './flags'

export default createStore({
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
});
