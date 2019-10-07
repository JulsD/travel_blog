import Vue from 'vue';

import _ from 'lodash';

import './styles';
import './firebase';

import router from './router';
import store from './store';
import App from './App.vue';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

