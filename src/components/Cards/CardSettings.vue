<script setup>
import { useUser } from '../../stores/user'
import { Form, Field } from 'vee-validate'
import axios from 'axios'
import { reactive, ref } from 'vue'

let user = ref()

axios
	.get('/api/user', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	})
	.then((res) => {
		user.value = res.data
	})
</script>

<template>
	<div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-slate-100 shadow-lg">
		<div class="mb-0 rounded-t bg-white px-6 py-6">
			<div class="flex justify-between text-center">
				<h6 class="text-xl font-bold text-slate-700">My account</h6>
				<button
					class="mr-1 rounded bg-emerald-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-emerald-600"
					type="button"
				>
					Settings
				</button>
			</div>
		</div>
		<div class="flex-auto px-4 py-10 pt-0 lg:px-10">
			<Form>
				<h6 class="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">User Information</h6>
				<div class="flex flex-wrap">
					<div class="w-full px-4 lg:w-6/12">
						<div class="relative mb-3 w-full">
							<label
								class="mb-2 block text-xs font-bold uppercase text-slate-600"
								htmlFor="grid-password"
							>
								Name
							</label>
							<input
								type="text"
								class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
								:value="user.user.name"
							/>
						</div>
					</div>
					<div class="w-full px-4 lg:w-6/12">
						<div class="relative mb-3 w-full">
							<label
								class="mb-2 block text-xs font-bold uppercase text-slate-600"
								htmlFor="grid-password"
							>
								Email address
							</label>
							<input
								type="email"
								class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
								:value="user.user.email"
							/>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="w-full px-4 lg:w-6/12">
						<div class="relative mb-3 w-full">
							<label
								class="mb-2 block text-xs font-bold uppercase text-slate-600"
								htmlFor="grid-password"
							>
								Name
							</label>
							<input
								type="text"
								class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
								:value="user.user.name"
							/>
						</div>
					</div>
					<div class="w-full px-4 lg:w-6/12">
						<div class="relative mb-3 w-full">
							<label
								class="mb-2 block text-xs font-bold uppercase text-slate-600"
								htmlFor="grid-password"
							>
								Email address
							</label>
							<input
								type="email"
								class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
								:value="user.user.email"
							/>
						</div>
					</div>
				</div>
			</Form>
		</div>
	</div>
</template>
