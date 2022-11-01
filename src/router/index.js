import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.store'

// * layouts
import Auth from '../layout/Auth.vue'
import Admin from '../layout/Admin.vue'

import Index from '../views/Index.vue'

/* views */
// auth
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Logout from '../views/auth/Logout.vue'

/* admin */
import Dashboard from '../views/admin/Dashboard.vue'

const redirectToHomeOnLoggedIn = (to, from, next) => {
	if (useAuthStore().loggedIn) next({ name: 'dashboard' })
	else next()
}

const routes = [
	{
		path: '/',
		name: 'main',
		component: Index,
	},
	{
		path: '/auth',
		redirect: '/auth/login',
		component: Auth,
		beforeEnter: redirectToHomeOnLoggedIn,
		children: [
			{
				path: '/auth/login',
				name: 'login',
				component: Login,
			},
			{
				path: '/auth/register',
				name: 'register',
				component: Register,
			},
			{
				path: '/auth/logout',
				name: 'logout',
				component: Logout,
				meta: { requireAuth: true },
			},
		],
	},
	{
		path: '/admin',
		name: 'admin',
		component: Admin,
		meta: { requireAuth: true },
		children: [
			{
				path: '/admin/dashboard',
				name: 'dashboard',
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

router.beforeEach((to, from, next) => {
	if (to.meta.requireAuth && !useAuthStore().loggedIn) next({ name: 'login' })
	else next()
})

export default router
