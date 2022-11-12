import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useAuthStore = defineStore({
	id: 'auth',
	state: () => ({
		user: null,
		loggedIn: localStorage.getItem('token') ? true : false,
		token: localStorage.getItem('token') || null,
	}),
	actions: {
		async register(name, email, password) {
			await axios.get('/sanctum/csrf-cookie')

			const response = (
				await axios.post('/api/auth/register', {
					name,
					email,
					password,
				})
			).data

			if (response.message == 'User created successfully') {
				router.push({ name: 'login' })
			}
		},
		async login(email, password) {
			await axios.get('/sanctum/csrf-cookie')

			const response = (await axios.post('/api/auth/login', { email, password })).data

			if (response) {
				const token = `Bearer ${response.token}`
				localStorage.setItem('token', token)
				axios.defaults.headers.common['Authorization'] = token

				await this.getUser()
				router.push({ name: 'dashboard' })
			}
		},
		async logout() {
			const response = (
				await axios.post('/api/auth/logout', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				})
			).data

			if (response) {
				localStorage.removeItem('token')
				this.$reset()
			}
		},
		async getUser() {
			this.user = (await axios.get('/api/user')).data
			this.loggedIn = true
		},
	},
})
