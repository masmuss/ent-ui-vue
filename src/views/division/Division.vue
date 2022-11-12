<script>
import Label from '../../components/Form/Label'
import Button from '../../components/Form/Button.vue'
import MemberCardTable from '../../components/Cards/MemberCardTable.vue'
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
	setup() {
		let divisions = ref([])
		let newDivision = reactive({
			title: '',
		})
		const editDivision = reactive({
			status: false,
			id: '',
			title: '',
		})
		let fields = ['Name', 'Created at', 'Members', '']

		onMounted(() => {
			getAll()
		})

		function getAll() {
			axios
				.get('/api/divisions')
				.then((result) => {
					divisions.value = result.data
				})
				.catch((error) => {
					console.log(error)
				})
		}

		function onSubmit() {
			axios
				.post('/api/divisions', newDivision)
				.then((result) => {
					getAll()
					showSuccessMessage(result.data.message)
					newDivision.title = ''
				})
				.catch((error) => {
					console.log(error)
				})
		}

		function edit(id) {
			axios
				.get(`/api/divisions/${id}`)
				.then((result) => {
					console.log(result)
					editDivision.status = true
					editDivision.id = result.data.data.id
					editDivision.title = result.data.data.title
				})
				.catch((error) => {
					console.log(error)
				})
		}

		async function onUpdate() {
			await axios
				.patch(`/api/divisions/${editDivision.id}`, editDivision)
				.then((result) => {
					console.log(result.data)
					getAll()
					showSuccessMessage(result.data.message)
					editDivision.status = false
				})
				.catch((error) => {
					console.log(error)
				})
		}

		function deleteDivision(id) {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!',
			}).then(async (result) => {
				if (result.isConfirmed) {
					await axios
						.delete(`/api/divisions/${id}`)
						.then((result) => {
							showSuccessMessage(result.data.message)
							getAll()
						})
						.catch((error) => {
							console.log(error)
						})
				}
			})
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
			newDivision,
			divisions,
			editDivision,
			fields,
			edit,
			onUpdate,
			onSubmit,
			deleteDivision,
		}
	},
	components: { Label, Button, MemberCardTable },
}
</script>

<template>
	<div class="mt-4 flex flex-wrap">
		<div class="mb-12 flex w-full gap-4 px-4">
			<div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
				<div class="mb-0 rounded-t border-0 px-4 py-3">
					<div class="flex flex-wrap items-center">
						<div class="relative flex w-full max-w-full flex-grow items-center justify-between px-4">
							<h3 class="bg-white text-lg font-semibold">Divisions table</h3>
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
							<tr v-for="(division, index) in divisions.data">
								<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle">
									{{ division.title }}
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
								>
									{{ new Date(division.created_at).toDateString() }}
								</td>
								<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 align-middle text-xs">
									<div class="flex items-center gap-2" v-if="division.members.length > 0">
										<div class="flex -space-x-4">
											<MemberCardTable
												v-for="member in division.members.slice(0, 4)"
												:text="member.name.substring(0, 2)"
											/>
										</div>
										<span v-if="division.members.length > 4" class="font-semibold text-slate-500">
											{{ `+${division.members.length - 4}` }}
										</span>
									</div>
									<div v-else>No members</div>
								</td>
								<td
									class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
								>
									<div class="space-x-2">
										<button @click="edit(division.id)">
											<i class="fas fa-edit"></i>
										</button>
										<button @click="deleteDivision(division.id)">
											<i class="fas fa-trash"></i>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="relative mb-6 flex w-1/3 min-w-0 flex-col break-words rounded bg-white shadow-lg">
				<div class="mb-0 rounded-t border-0 px-4 py-3">
					<div class="flex flex-wrap items-center">
						<div class="relative flex w-full max-w-full flex-grow items-center justify-between px-4">
							<h3 class="bg-white text-lg font-semibold">
								{{ editDivision.status ? 'Edit division' : 'Add new division' }}
							</h3>
						</div>
					</div>
				</div>
				<div class="block w-full overflow-x-auto p-4">
					<div v-if="editDivision.status">
						<form @submit.prevent="onUpdate" class="flex h-auto flex-col justify-between">
							<div class="relative mb-3 w-full">
								<Label htmlFor="name">Name</Label>
								<input
									name="name"
									type="text"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									v-model="editDivision.title"
									required
								/>
							</div>
							<div class="space-y-2">
								<Button
									type="button"
									@click="editDivision.status = !editDivision.status"
									classList="bg-slate-100 text-slate-800"
								>
									Cancel
								</Button>
								<Button type="submit"> Update </Button>
							</div>
						</form>
					</div>
					<div v-else>
						<form @submit.prevent="onSubmit" class="flex h-auto flex-col justify-between">
							<div class="relative mb-3 w-full">
								<Label htmlFor="name">Name</Label>
								<input
									name="name"
									type="text"
									class="relative w-full rounded border border-slate-300 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 outline-none focus:outline-none focus:ring"
									placeholder="supervisor"
									v-model="newDivision.title"
									required
								/>
							</div>
							<div>
								<Button type="submit"> Add </Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
