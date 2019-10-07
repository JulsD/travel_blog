import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue'
import Demo from './pages/Demo.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', component: Home },
    { path: '/demo/:id', component: Demo }
]})