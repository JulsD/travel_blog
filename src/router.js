import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './organisms/Home.vue'
import Demo from './organisms/Demo.vue'
import ArticleView from './organisms/ArticleView.vue'
import ArticleNew from './organisms/ArticleNew.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/demo/:id', name: 'demo', component: Demo },
    { path: '/articles/:id', name: 'article', component: ArticleView },
    { path: '/new-article/:name?', name: 'new-article', component: ArticleNew },
]})
