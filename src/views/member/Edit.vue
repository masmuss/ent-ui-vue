<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'

import Label from '../../components/Form/Label'
import Button from '../../components/Form/Button.vue'
import router from '../../router'

export default {
	setup() {
		const member = reactive({
			nrp: '',
			name: '',
			email: '',
			phone_number: '',
			department_id: '',
			division_id: '',
			generation_id: '',
		})
		let divisions = ref([])
		let departments = ref([])
		let generations = ref([])

		onMounted(() => {
			// get member by ID
			axios
				.get(`/api/members/${router.currentRoute.value.params.id}`)
				.then((result) => {
					console.log(result.data.data)
					member.nrp = result.data.data.nrp
					member.name = result.data.data.name
					member.email = result.data.data.email
					member.phone_number = result.data.data.phone_number
					member.department_id = result.data.data.department_id
					member.division_id = result.data.data.division_id
					member.generation_id = result.data.data.generation_id
				})
				.catch((error) => {
					console.log(error)
				})

			// get divisions
			axios
				.get('/api/divisions')
				.then((result) => {
					divisions.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})

			// get departments
			axios
				.get('/api/departments')
				.then((result) => {
					departments.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})

			// get generations
			axios
				.get('/api/generations')
				.then((result) => {
					generations.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})
		})

		const onSubmit = async () => {
			await axios
				.patch(`/api/members/${router.currentRoute.value.params.id}`, member)
				.then((result) => {
					console.log(result)
					router.push({ name: 'member' })
				})
				.catch((error) => {
					console.log(error)
				})
		}

		return {
			member,
			divisions,
			departments,
			generations,
			onSubmit,
		}
	},
	components: {
		Form,
		Field,
		ErrorMessage,
		Label,
		Button,
	},
}
</script>

<template>
	<div class="mt-4 flex flex-wrap">
		<div class="mb-12 w-full px-4">
			<div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
				<div class="mb-0 rounded-t border-0 px-4 py-3">
					<div class="flex flex-wrap items-center">
						<div class="relative flex w-full max-w-full flex-grow items-center justify-between px-4">
							<h3 class="bg-white text-lg font-semibold">Create Member</h3>
						</div>
					</div>
				</div>
				<div class="block w-full overflow-x-auto p-5">
					{{ member }}
					<form @submit.prevent="onSubmit">
						<div class="flex gap-5">
							<div class="relative mb-3 w-full">
								<Label htmlFor="nrp">NRP</Label>
								<Field
									name="nrp"
									type="number"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									placeholder="1234567890"
									v-model="member.nrp"
									required
								/>
							</div>
							<div class="relative mb-3 w-full">
								<Label htmlFor="name">Name</Label>
								<Field
									name="name"
									type="text"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									placeholder="John Doe"
									v-model="member.name"
									required
								/>
							</div>
						</div>
						<div class="flex gap-5">
							<div class="relative mb-3 w-full">
								<Label htmlFor="email">Email</Label>
								<Field
									name="email"
									type="email"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									placeholder="johndoe@mail.com"
									v-model="member.email"
									required
								/>
							</div>
							<div class="relative mb-3 w-full">
								<Label htmlFor="phone_number">Phone number</Label>
								<Field
									name="phone_number"
									type="phone"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									placeholder="0812xxxxxx"
									v-model="member.phone_number"
									required
								/>
							</div>
						</div>
						<div class="flex gap-5">
							<div class="relative mb-3 w-full">
								<Label htmlFor="department">Department</Label>
								<!-- {{ departments }} -->
								<Field
									name="department"
									as="select"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									required
									v-model="member.department_id"
								>
									<option selected disabled>Choose department</option>
									<option
										v-for="department in departments.data"
										:key="department.id"
										:value="department.id"
									>
										{{ department.level }}
									</option>
								</Field>
							</div>
							<div class="relative mb-3 w-full">
								<Label htmlFor="division">Division</Label>
								<!-- {{ divisions }} -->
								<Field
									name="division"
									as="select"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									v-model="member.division_id"
									required
								>
									<option selected disabled>Choose division</option>
									<option v-for="division in divisions.data" :key="division.id" :value="division.id">
										{{ division.title }}
									</option>
								</Field>
							</div>
							<div class="relative mb-3 w-full">
								<Label htmlFor="generation">Generation</Label>
								<Field
									name="generation"
									as="select"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									v-model="member.generation_id"
									required
								>
									<option selected disabled>Choose generation</option>
									<option
										v-for="generation in generations.data"
										:key="generation.id"
										:value="generation.id"
									>
										{{ generation.title }}
									</option>
								</Field>
							</div>
						</div>
						<Button type="submit"> save changes </Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
