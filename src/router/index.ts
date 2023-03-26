import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

import Home from '@p/Home.vue'
import Login from '@p/Login.vue'
import Animate from '@p/Animate.vue'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name: 'animate',
        path: '/animate',
        component: Animate,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router
