import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue'
import Demo from './pages/Demo.vue'
import Article from './pages/Article.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/demo/:id', name: 'demo', component: Demo },
    { path: '/articles/:name', name: 'article', component: Article }
]})
