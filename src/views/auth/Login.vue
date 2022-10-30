<script setup>
import Input from '../../components/Form/Input.vue'
import Label from '../../components/Form/Label'
import Button from '../../components/Form/Button.vue'
import InputError from '../../components/Form/InputError.vue'
import FormError from '../../components/Form/FormError.vue'

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const state = reactive({
	form: { email: '', password: '' },
	loading: false,
})

let errors = ref('')
let statusCode = ref(0)

const login = async () => {
	state.loading = true
	axios.get('/sanctum/csrf-cookie').then(() => {
		axios
			.post('/api/auth/login', state.form)
			.then((response) => {
				router.push({ name: 'Dashboard' })
			})
			.catch((error) => {
				statusCode.value = error.response.status
				statusCode.value == 422
					? (errors.value = error.response.data.errors)
					: (errors.value = error.response.data.message)
			})
			.finally(() => {
				state.loading = false
			})
	})
}
</script>

<template>
	<div class="container mx-auto h-full px-4">
		<div class="flex h-full content-center items-center justify-center">
			<div class="w-full px-4 lg:w-4/12">
				<div
					class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-slate-200 shadow-lg"
				>
					<div class="mb-0 rounded-t px-6 py-6">
						<div class="text-center">
							<h6 class="text-lg font-bold text-slate-500">
								Sign in
							</h6>
						</div>
					</div>
					<div class="flex-auto px-4 py-10 pt-0 lg:px-10">
						<FormError
							v-if="errors && statusCode != 422"
							:error="errors"
						/>
						<form @submit.prevent="login">
							<div class="relative mb-3 w-full">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="text"
									placeholder="Email"
									v-model="state.form.email"
									autofocus
								/>
								<InputError
									v-if="errors.email"
									:messages="errors.email[0]"
								/>
							</div>

							<div class="relative mb-3 w-full">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									placeholder="Password"
									v-model="state.form.password"
								/>
								<InputError
									v-if="errors.password"
									:messages="errors.password[0]"
								/>
							</div>

							<div class="mt-6 text-center">
								<Button
									type="submit"
									:class="{
										'opacity-50': state.loading,
									}"
									:disabled="state.loading"
								>
									{{
										state.loading ? 'Loading...' : 'Sign in'
									}}
								</Button>
							</div>
						</form>
						<div>
							<p class="mt-4 text-center text-sm text-slate-500">
								Don't have an account?
								<router-link
									class="font-bold text-slate-600 hover:text-slate-700"
									:to="{ name: 'Register' }"
								>
									Sign Up
								</router-link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
