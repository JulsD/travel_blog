import Vue from 'vue';
import VueRouter from 'vue-router';

// const Home = resolve => require(['./organisms/Home.vue'], resolve);
// const ArticleView = resolve => require(['./organisms/ArticleView.vue'], resolve);
// const ArticleNew = resolve => require(['./organisms/ArticleNew.vue'], resolve);

import Home from './organisms/Home.vue'
import ArticleView from './organisms/ArticleView.vue'
import ArticleNew from './organisms/ArticleNew.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/articles/:id', name: 'article', component: ArticleView },
    { path: '/new-article/:name?', name: 'new-article', component: ArticleNew },
]})
