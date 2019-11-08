import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue'
import Demo from './pages/Demo.vue'
import Post from './pages/Post.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/demo/:id', name: 'demo', component: Demo },
    { path: '/articles/:name', name: 'post', component: Post }
]})
