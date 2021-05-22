import Vue from 'vue';

import _ from 'lodash';

import './styles';
import './firebase';

import firebase from './firebase';
import auth from './services/auth.service';
import router from './router';
import store from './store';
import App from './App.vue';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

