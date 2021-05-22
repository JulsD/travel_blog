import { createApp } from 'vue';

import _ from 'lodash';
import './styles';
import './firebase';
import './services/auth.service';

// import firebase from './firebase';
import router from './router';
import store from './store';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

