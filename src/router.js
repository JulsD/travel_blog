import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue'
import Article from './pages/Article.vue'
import ArticleNew from './pages/ArticleNew.vue'
import Druft from './pages/Druft.vue'
import DruftsList from './pages/DruftsList.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/articles/:id', name: 'article', component: Article },
    { path: '/new-article/:name?', name: 'new-article', component: ArticleNew },
    { path: '/drufts/:name?', name: 'druft', component: Druft },
    { path: '/drufts', name: 'new-article', component: DruftsList },
]})
