<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
	setup() {
		let logs = ref([])
		let fields = ['Date', 'Status Code', 'Method','URI', 'Duration', 'IP / User Agent', '']

		onMounted(() => {
			getAll()
		})

		async function getAll() {
			await axios
				.get('/api/logs')
				.then((result) => (logs.value = result.data))
				.catch((error) => console.log(error))
		}

		return {
			logs,
			fields,
		}
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
							<h3 class="bg-white text-lg font-semibold">Logs</h3>
						</div>
					</div>
				</div>
				<div class="block w-full overflow-x-auto">
					<table class="w-full border-collapse items-center bg-transparent">
						<thead>
							<tr>
								<th
									class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 align-middle text-xs font-semibold uppercase text-slate-500"
									v-for="field in fields"
								>
									{{ field }}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="log in logs.data" :key="log.id">
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ new Date(log.created_at).toLocaleString() }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-center align-middle text-xs"
								>
									<span
										class="rounded px-2 py-1 font-semibold tracking-wide"
										:class="{
											'bg-green-100 text-green-800':
												log.status_code >= 200 && log.status_code < 300,
											'bg-yellow-100 text-yellow-800':
												log.status_code >= 300 && log.status_code < 400,
											'bg-red-100 text-red-800': log.status_code >= 400 && log.status_code < 500,
											'bg-gray-100 text-gray-800':
												log.status_code >= 500 && log.status_code < 600,
										}"
										>{{ log.status_code }}</span
									>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-xs"
								>
									<span 
										class="px-2 py-1 font-semibold rounded"
										:class="{
											'bg-blue-100 text-blue-800': log.method === 'GET',
											'bg-green-100 text-green-800': log.method === 'POST',
											'bg-yellow-100 text-yellow-800': log.method === 'PUT',
											'bg-red-100 text-red-800': log.method === 'DELETE',
										}"
									>{{ log.method }}</span>
								</td>
								<th
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-xs"
								>
									/{{ log.uri }}
								</th>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ log.duration }} ms
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<span class="mb-1 text-sm font-semibold text-blue-600">{{ log.ip }}</span>
									<p class="">{{ log.user_agent }}</p>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-xs"
								></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
