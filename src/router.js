import Home from './components/pages/Home.vue'
import Demo from './components/pages/Demo.vue'

export default [
    { path: '/', component: Home },
    { path: '/demo/:id', component: Demo }
]