import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '../stores/auth.store'

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
import Profile from '../views/profile/Profile.vue'

import Division from '../views/division/Division.vue'

import Department from '../views/department/Department.vue'

import Member from '../views/member/Member.vue'
import Create from '../views/member/Create.vue'
import Edit from '../views/member/Edit.vue'

// const redirectToHomeOnLoggedIn = (to, from, next) => {
// 	useAuthStore().token != null ? next({ name: 'dashboard' }) : next()
// }

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
		// beforeEnter: redirectToHomeOnLoggedIn,
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
		// meta: { requireAuth: true },
		children: [
			{
				path: '/admin/dashboard',
				name: 'dashboard',
				component: Dashboard,
			},
			{
				path: '/admin/setting',
				name: 'setting',
				component: Profile,
			},
			{
				path: '/division',
				name: 'division',
				component: Division,
			},
			{
				path: '/department',
				name: 'department',
				component: Department,
			},
			{
				path: '/member',
				name: 'member',
				component: Member,
			},
			{
				path: '/member/create',
				name: 'member.create',
				component: Create,
			},
			{
				path: '/member/edit/:id',
				name: 'member.edit',
				component: Edit,
			},
		],
	},
	{ path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

// router.beforeEach((to, from, next) => {
// 	if (to.meta.requireAuth && !useAuthStore().loggedIn) next({ name: 'login' })
// 	else next()
// })

export default router
