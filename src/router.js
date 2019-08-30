import Home from './components/Home.vue'
import Demo from './components/Demo.vue'

export default [
    { path: '/', component: Home },
    { path: '/demo/:id', component: Demo }
]