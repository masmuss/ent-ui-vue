import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useUser = defineStore({
	id: 'user',
	state: () => ({
		user: null,
	}),
	actions: {
		async getUser() {
			const response = (await axios.get('/api/user')).data
			this.user = response
		},
	},
})
