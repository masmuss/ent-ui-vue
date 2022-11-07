<script setup>
import TableDropdown from '../Dropdown/TableDropdown.vue'

import bootstrap from '../../assets/img/bootstrap.jpg'

import team1 from '../../assets/img/team-1-800x800.jpg'
import team2 from '../../assets/img/team-2-800x800.jpg'
import team3 from '../../assets/img/team-3-800x800.jpg'
import team4 from '../../assets/img/team-4-470x470.png'

defineProps({
	title: {
		type: String,
		required: true,
		default: 'Table',
	},
	fields: {
		type: Array,
		required: true,
		default: [],
	},
	collections: {
		type: Array,
		required: true,
		default: [],
	},
})
</script>
<template>
	<div
		class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
	>
		<div class="mb-0 rounded-t border-0 px-4 py-3">
			<div class="flex flex-wrap items-center">
				<div class="relative w-full max-w-full flex-1 flex-grow px-4">
					<h3 class="bg-white text-lg font-semibold">
						{{ title }}
					</h3>
				</div>
			</div>
		</div>
		<div class="block w-full overflow-x-auto">
			<!-- Projects table -->
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
						<th
							class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(collection, index) in collections">
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							{{ index + 1 }}
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<i class="fas fa-circle mr-2 text-orange-500"></i>
							{{ collection.name }}
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<div class="flex">
								<img
									:src="team1"
									alt="..."
									class="h-10 w-10 rounded-full border-2 border-slate-50 shadow"
								/>
								<img
									:src="team2"
									alt="..."
									class="-ml-4 h-10 w-10 rounded-full border-2 border-slate-50 shadow"
								/>
								<img
									:src="team3"
									alt="..."
									class="-ml-4 h-10 w-10 rounded-full border-2 border-slate-50 shadow"
								/>
								<img
									:src="team4"
									alt="..."
									class="-ml-4 h-10 w-10 rounded-full border-2 border-slate-50 shadow"
								/>
							</div>
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<div class="flex items-center">
								<span class="mr-2">60%</span>
								<div class="relative w-full">
									<div
										class="flex h-2 overflow-hidden rounded bg-red-200 text-xs"
									>
										<div
											style="width: 60%"
											class="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
										></div>
									</div>
								</div>
							</div>
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs"
						>
							<table-dropdown />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
