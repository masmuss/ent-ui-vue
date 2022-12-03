<script>
import Input from '../../components/Form/Input.vue'
import Button from '../../components/Form/Button.vue'
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
	setup() {
		let finances = ref([])
		let fields = ['Date', 'Description', 'Income', 'Expense', 'Balance', '']
		const record = reactive({
			date: '',
			description: '',
			amount: '',
			type: '',
		})

		onMounted(() => {
			getAll()
		})

		async function getAll() {
			await axios
				.get('/api/finance')
				.then((result) => {
					finances.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})
		}

		async function create() {
			await axios
				.post('/api/finance', record)
				.then((result) => {
					showSuccessMessage(result.data.message)
					resetForm()
					getAll()
				})
				.catch((error) => {
					console.log(error)
				})
		}

		function toIdr(amount) {
			return new Intl.NumberFormat('id-ID', {
				style: 'currency',
				currency: 'IDR',
			}).format(amount)
		}

		function resetForm() {
			record.date = ''
			record.description = ''
			record.amount = ''
			record.type = ''
		}

		function showSuccessMessage(message) {
			Swal.fire({
				icon: 'success',
				title: message,
				showConfirmButton: false,
				timer: 1500,
			})
		}

		return {
			finances,
			fields,
			record,
			toIdr,
			create,
		}
	},
	components: { Input, Button },
}
</script>

<template>
	<div class="mt-4 flex flex-wrap">
		<div class="mb-12 w-full px-4">
			<div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
				<div class="px-4 py-3">
					<form class="flex gap-3" @submit.prevent="create">
						<Input placeholder="date" type="date" v-model="record.date" />
						<Input placeholder="description" v-model="record.description" />
						<Input placeholder="Amount" type="number" v-model="record.amount" />
						<select
							class="w-full rounded border-0 bg-white p-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
							v-model="record.type"
                     placeholder="Type"
						>
							<option value="income">Income</option>
							<option value="expense">Expense</option>
						</select>
						<Button type="submit">Add</Button>
					</form>
				</div>
				<div class="mb-0 rounded-t border-0 px-4 py-3">
					<div class="flex flex-wrap items-center">
						<div class="relative flex w-full max-w-full flex-grow items-center justify-between px-4">
							<h3 class="bg-white text-lg font-semibold">Finance table</h3>
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
							<tr v-for="finance in finances.data" :key="finance.id">
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<strong class="text-sm tracking-wide text-slate-700">{{ finance.name }}</strong>
									<p class="text-slate-500">
										{{ finance.date }}
									</p>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									<p class="text-sm font-semibold tracking-wide text-slate-500">
										{{ finance.description }}
									</p>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ finance.type == 'income' ? toIdr(finance.amount) : '---' }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ finance.type == 'expense' ? toIdr(finance.amount) : '---' }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-xs"
								>
									{{ toIdr(finance.balance) }}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
