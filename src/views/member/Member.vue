<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import TableDropdown from '../../components/Dropdown/TableDropdown.vue'

export default {
	setup() {
		let members = ref([])
		let fields = ['Name / ID', 'Division', 'Generation', 'E-mail / mobile', '']

		onMounted(() => {
			axios
				.get('/api/members')
				.then((result) => {
					members.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})
		})

		const deleteMember = async (id) => {
			await axios
				.delete(`/api/members/${id}`)
				.then((result) => {
					console.log(result)
					axios
						.get('/api/members')
						.then((result) => {
							members.value = result.data
						})
						.catch((error) => {
							console.log(error)
						})
				})
				.catch((error) => {
					console.log(error)
				})
		}

		return {
			members,
			fields,
			deleteMember,
		}
	},
	components: { TableDropdown },
}
</script>

<template>
	<div class="mt-4 flex flex-wrap">
		<div class="mb-12 w-full px-4">
			<div
				class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
			>
				<div class="mb-0 rounded-t border-0 px-4 py-3">
					<div class="flex flex-wrap items-center">
						<div
							class="relative flex w-full max-w-full flex-grow items-center justify-between px-4"
						>
							<h3 class="bg-white text-lg font-semibold">Members table</h3>
							<router-link
								class="flex items-center gap-3 rounded bg-slate-600 px-3 py-1.5 text-sm text-slate-100"
								:to="{ name: 'member.create' }"
							>
								<i class="fas fa-plus"></i>
								create
							</router-link>
						</div>
					</div>
				</div>
				<div class="block w-full overflow-x-auto">
					<table class="w-full border-collapse items-center bg-transparent">
						<thead>
							<tr>
								<th
									class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
								>
									#
								</th>
								<th
									class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
									v-for="field in fields"
								>
									{{ field }}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(member, index) in members.data" :key="member.id">
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ index + 1 }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<strong
										class="text-sm tracking-wide text-slate-700"
										>{{ member.name }}</strong
									>
									<p class="text-slate-500">
										{{ member.nrp }}
									</p>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<p
										class="text-sm font-semibold tracking-wide text-slate-500"
									>
										{{ member.division.title }}
									</p>
									<p>
										{{
											`${
												new Date().getFullYear() -
												new Date(
													member.created_at
												).getFullYear() +
												1
											} year`
										}}
									</p>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ member.generation.title }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<p class="text-sm tracking-wide text-blue-500">
										{{ member.email }}
									</p>
									<p class="text-sm">{{ member.phone_number }}</p>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-sm"
								>
									<router-link
										:to="{
											name: 'member.edit',
											params: { id: member.id },
										}"
									>
										<i class="fas fa-edit text-blue-500"></i>
									</router-link>
									<button class="ml-2" @click="deleteMember(member.id)">
										<i class="fas fa-trash text-red-500"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
