<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
	setup() {
		let mails = ref([])
		let fields = ['Ref. Number / To', 'Place & Date', 'Subject', '']

		onMounted(() => {
			getAll()
		})

		async function getAll() {
			await axios
				.get('/api/mailings')
				.then((result) => (mails.value = result.data))
				.catch((error) => console.log(error))
		}

		return {
			mails,
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
							<h3 class="bg-white text-lg font-semibold">Mails</h3>
							<router-link
								:to="{ name: 'mailing.create' }"
								class="mr-1 mb-1 rounded bg-slate-500 px-3 py-2 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-600"
							>
                        Create new mail
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
									v-for="field in fields"
								>
									{{ field }}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="mail in mails.data" :key="mail.id">
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<p class="mb-2 text-sm font-semibold tracking-wide">{{ mail.reference_number }}</p>
									<span>{{ mail.receiver }}</span>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ mail.location }}, {{ mail.date }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-xs"
								>
									{{ mail.subject }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-xs"
								>
									<router-link
										:to="{ name: 'mailing.view', params: { id: mail.id } }"
										class="rounded bg-slate-700 px-3 py-1.5 font-semibold tracking-wide text-slate-200"
									>
										View
									</router-link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
