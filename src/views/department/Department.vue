<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import TableDropdown from '../../components/Dropdown/TableDropdown.vue'

export default {
	setup() {
		let departments = ref([])
		let fields = ['Name', 'members', '']

		onMounted(() => {
			axios
				.get('/api/departments')
				.then((result) => {
					departments.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})
		})
		return {
			departments,
			fields,
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
							<h3 class="bg-white text-lg font-semibold">
								Department table
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
							<tr
								v-for="(department, index) in departments.data"
								:key="department.id"
							>
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
										>{{ department.level }}</strong
									>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ department.members.length }} members
								</td>

								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs"
								>
									<TableDropdown />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
