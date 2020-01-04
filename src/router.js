import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue'
import Demo from './pages/Demo.vue'
import Article from './pages/Article.vue'
import ArticleNew from './pages/ArticleNew.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/demo/:id', name: 'demo', component: Demo },
    { path: '/articles/:id', name: 'article', component: Article },
    { path: '/new-article/:name?', name: 'new-article', component: ArticleNew },
]})
