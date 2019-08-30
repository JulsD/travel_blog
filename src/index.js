import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'

import _ from 'lodash';

import routes from './router';
import storadge from './store';
import App from './App.vue';

Vue.use(Vuex)
Vue.use(VueRouter);

const router = new VueRouter({routes})
const store = new Vuex.Store(storadge)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

