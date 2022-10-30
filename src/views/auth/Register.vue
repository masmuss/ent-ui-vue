<script setup>
import Label from '../../components/Form/Label'
import Input from '../../components/Form/Input.vue'
import Button from '../../components/Form/Button.vue'
import InputError from '../../components/Form/InputError.vue'
import FormError from '../../components/Form/FormError.vue'

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const state = reactive({
	form: { name: '', email: '', password: '' },
	loading: false,
})

const router = useRouter()
let errors = ref('')
let statusCode = ref(0)

const register = async () => {
	state.loading = true
	axios.get('/sanctum/csrf-cookie').then(() => {
		axios
			.post('/api/auth/register', state.form)
			.then((response) => {
				router.push({ name: 'Login' })
			})
			.catch((error) => {
				statusCode.value = error.response.status
				errors.value = error.response.data.errors
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
			<div class="w-full px-4 lg:w-6/12">
				<div
					class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-slate-200 shadow-lg"
				>
					<div class="mb-0 rounded-t px-6 py-6">
						<div class="text-center">
							<h6 class="text-lg font-bold text-slate-500">
								Sign up with
							</h6>
						</div>
					</div>
					<div class="flex-auto px-4 py-10 pt-0 lg:px-10">
						<form @submit.prevent="register">
							<div class="relative mb-3 w-full">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="Name"
									autofocus
									v-model="state.form.name"
								/>
								<InputError
									v-if="errors.name"
									:messages="errors.name[0]"
								/>
							</div>

							<div class="relative mb-3 w-full">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Email"
									v-model="state.form.email"
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

							<div>
								<label
									class="inline-flex cursor-pointer items-center"
								>
									<input
										id="customCheckLogin"
										type="checkbox"
										class="form-checkbox ml-1 h-5 w-5 rounded border-0 text-slate-700 transition-all duration-150 ease-linear"
									/>
									<span
										class="ml-2 text-sm font-semibold text-slate-600"
									>
										I agree with the
										<a
											href="javascript:void(0)"
											class="text-emerald-500"
										>
											Privacy Policy
										</a>
									</span>
								</label>
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
										state.loading
											? 'Loading...'
											: 'Create Account'
									}}
								</Button>
							</div>
						</form>
						<div>
							<p class="mt-4 text-center text-sm text-slate-500">
								Already have an account?
								<router-link
									class="font-bold text-slate-600 hover:text-slate-700"
									:to="{ name: 'Login' }"
								>
									Sign in
								</router-link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
