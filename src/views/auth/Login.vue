<script setup>
import Input from '../../components/Form/Input.vue'
import Label from '../../components/Form/Label'
import Button from '../../components/Form/Button.vue'
import InputError from '../../components/Form/InputError.vue'
import FormError from '../../components/Form/FormError.vue'

import { Form, Field } from 'vee-validate'
import { useAuthStore } from '../../stores/auth.store'
import * as Yup from 'yup'

const schema = Yup.object().shape({
	email: Yup.string().email('Email is not valid').required('Email is required'),
	password: Yup.string().required('Password is required'),
})

function onSubmit(values, { setErrors }) {
	const authStore = useAuthStore()
	const { email, password } = values

	return authStore.login(email, password).catch((error) => setErrors({ message: error }))
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
							<h6 class="text-lg font-bold text-slate-500">Sign in</h6>
						</div>
					</div>
					<div class="flex-auto px-4 py-10 pt-0 lg:px-10">
						<Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
							<FormError v-if="errors.message" :error="errors.message" />
							<div class="relative mb-3 w-full">
								<Label htmlFor="email">Email</Label>
								<Field
									name="email"
									type="email"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									placeholder="Email"
									autocomplete="email"
									required
								/>
								<InputError v-if="errors.email" :messages="errors.email" />
							</div>

							<div class="relative mb-3 w-full">
								<Label htmlFor="password">Password</Label>
								<Field
									name="password"
									type="password"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									placeholder="Password"
									autocomplete="current-password"
									required
								/>
								<InputError v-if="errors.password" :messages="errors.password" />
							</div>

							<div class="mt-6 text-center">
								<Button
									type="submit"
									:class="{
										'opacity-50': isSubmitting,
									}"
									:disabled="isSubmitting"
								>
									{{ isSubmitting ? 'Loading...' : 'Sign in' }}
								</Button>
							</div>
						</Form>
						<div>
							<p class="mt-4 text-center text-sm text-slate-500">
								Don't have an account?
								<router-link
									class="font-bold text-slate-600 hover:text-slate-700"
									:to="{ name: 'register' }"
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
