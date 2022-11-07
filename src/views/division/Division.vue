<script>
import CardTable from '../../components/Cards/CardTable.vue'

// fetch api
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
	setup() {
		let divisions = ref([])
		let fields = ['Name', 'Created at', 'Members', 'Actions']

		onMounted(() => {
			axios
				.get('/api/divisions')
				.then((result) => {
					divisions.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})
		})

		return {
			divisions,
			fields,
		}
	},
}
</script>

<template>
	<div class="mt-4 flex flex-wrap">
		<div class="mb-12 flex w-full gap-4 px-4">
			<div
				class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
			>
				<div class="mb-0 rounded-t border-0 px-4 py-3">
					<div class="flex flex-wrap items-center">
						<div
							class="relative flex w-full max-w-full flex-grow items-center justify-between px-4"
						>
							<h3 class="bg-white text-lg font-semibold">
								Divisions table
							</h3>
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
							<tr v-for="(division, index) in divisions.data">
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ index + 1 }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ division.title }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ new Date(division.created_at).toDateString() }}
								</td>
								<td
									class="flex -space-x-4 whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<div
										class="flex h-8 w-8 items-center justify-center rounded-full border border-solid border-white bg-slate-600 text-slate-200"
										v-for="member in division.members"
									>
										{{ member.name.substring(0, 2) }}
									</div>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs"
								>
									<button>
										<i class="fas fa-edit"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				class="relative mb-6 flex w-1/3 min-w-0 flex-col break-words rounded bg-white shadow-lg"
			>
				<div class="mb-0 rounded-t border-0 px-4 py-3">
					<div class="flex flex-wrap items-center">
						<div
							class="relative flex w-full max-w-full flex-grow items-center justify-between px-4"
						>
							<h3 class="bg-white text-lg font-semibold">
								Create division
							</h3>
						</div>
					</div>
				</div>
				<div class="block w-full overflow-x-auto p-4">
					<form action="">
						<div class="relative mb-3 w-full">
							<Label htmlFor="name">Name</Label>
							<input
								name="name"
								type="text"
								class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
								placeholder="1234567890"
								required
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
