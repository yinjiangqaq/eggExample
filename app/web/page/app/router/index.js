import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior: () => {
        return { x: 0, y: 0 }
    }
})

export default router