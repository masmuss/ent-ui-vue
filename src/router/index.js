import { createRouter, createWebHistory } from 'vue-router'

// * layouts
import Auth from '../layout/Auth.vue'
import Admin from '../layout/Admin.vue'

import Index from '../views/Index.vue'

/* views */
// auth
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

/* admin */
import Dashboard from '../views/admin/Dashboard.vue'

const routes = [
	{
		path: '/',
		name: 'MainPage',
		component: Index,
	},
	{
		path: '/auth',
		redirect: '/auth/login',
		component: Auth,
		children: [
			{
				path: '/auth/login',
				name: 'Login',
				component: Login,
			},
			{
				path: '/auth/register',
				name: 'Register',
				component: Register,
			},
		],
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
		children: [
			{
				path: '/admin/dashboard',
				name: 'Dashboard',
				component: Dashboard,
			},
		],
	},
	{ path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.afterEach((to, from) => {
	const toDepth = to.path.split('/').length
	const fromDepth = from.path.split('/').length
	to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router
