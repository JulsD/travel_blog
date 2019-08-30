import Vue from 'vue';
import VueRouter from 'vue-router';

import _ from 'lodash';

import routes from './router';
import store from './store';
import App from './App.vue';

const router = new VueRouter({routes})

Vue.use(VueRouter);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

