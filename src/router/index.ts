import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

import Home from '@p/Home.vue'
import Login from '@p/Login.vue'
import Animate from '@p/Animate.vue'
import Spotify from '@p/Spotify.vue'
import CatAndMouse1 from '@p/CatAndMouse1.vue'
import CatAndMouse2 from '@p/CatAndMouse2.vue'
import CatAndMouse3 from '@p/CatAndMouse3.vue'

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
    {
        name: 'spotify',
        path: '/spotify',
        component: Spotify,
    },
    {
        name: 'catAndMouse1',
        path: '/cat-and-mouse-1',
        component: CatAndMouse1,
    },
    {
        name: 'catAndMouse2',
        path: '/cat-and-mouse-2',
        component: CatAndMouse2,
    },
    {
        name: 'catAndMouse3',
        path: '/cat-and-mouse-3',
        component: CatAndMouse3,
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
