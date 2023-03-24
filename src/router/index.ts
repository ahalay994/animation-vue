import {
	createRouter,
	createWebHistory,
	RouteRecordRaw,
} from 'vue-router'

import Home from '@p/Home.vue'
import Login from '@p/Login.vue'

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
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.afterEach((to, from) => {
	const toDepth = to.path.split('/').length
	const fromDepth = from.path.split('/').length
	to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router
