import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import DcHeros from './pages/DcHeros.vue'
import Calendar from './pages/Calendar.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
