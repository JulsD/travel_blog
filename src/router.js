import Home from './pages/Home.vue'
import Article from './pages/Article.vue'
import ArticleNew from './pages/ArticleNew.vue'
import Draft from './pages/Draft.vue'
import DraftsList from './pages/DraftsList.vue'

Vue.use(VueRouter);

export default new VueRouter({routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/articles/:id', name: 'article', component: Article },
    { path: '/new-article/:name?', name: 'new-article', component: ArticleNew },
    // { path: '/drafts/:name?', name: 'draft', component: Draft },
    { path: '/drafts', name: 'drafts', component: DraftsList },
]})
