import { createApp } from 'vue'
import VueRouter from 'vue-router';

import _ from 'lodash';

import './styles';
import './firebase';

import firebase from './firebase';
import auth from './services/auth.service';
import router from './router';
import store from './store';
import App from './App.vue';

const app = createApp(App)
app.use(VueRouter);
app.mount('#app');

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

