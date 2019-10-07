import Vue from 'vue';
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './firebase'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      }
})