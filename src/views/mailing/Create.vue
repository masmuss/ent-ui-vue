<script>
import { ErrorMessage } from 'vee-validate'
import { reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

import Label from '../../components/Form/Label'
import Input from '../../components/Form/Input.vue'
import Button from '../../components/Form/Button.vue'
import router from '../../router'

export default {
	setup() {
		const mail = reactive({
			reference_number: '',
			attachment: '',
			subject: '',
			location: '',
			date: '',
			receiver: '',
			receiver_address: '',
			body: '',
			sender_position: '',
			sender_name: '',
			sender_id_type: '',
			sender_id: '',
		})

		const onSubmit = async () => {
			await axios
				.post('/api/mailings', {
					reference_number: mail.reference_number,
					attachment: mail.attachment,
					subject: mail.subject,
					location: mail.location,
					date: mail.date,
					receiver: mail.receiver,
					receiver_address: mail.receiver_address,
					body: mail.body,
					sender_position: mail.sender_position,
					sender_name: mail.sender_name,
					sender_id_type: mail.sender_id_type,
					sender_id: mail.sender_id,
				})
				.then((result) => {
					showMessage('success', result.data.message)
					router.push({ name: 'mailing' })
				})
				.catch((error) => {
					showMessage('error', error.response.data.message)
				})
		}

		const showMessage = async (type, message) => {
			await Swal.fire({
				title: message,
				icon: type,
				showConfirmButton: false,
				timer: 1500,
			})
		}

		return {
			mail,
			onSubmit,
		}
	},
	components: {
		Input,
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
						<div class="relative flex w-full max-w-full flex-grow items-center justify-between px-1">
							<h3 class="bg-white text-lg font-semibold">Create new mail</h3>
						</div>
					</div>
				</div>
				<div class="block min-h-screen-75 w-full overflow-x-auto p-5">
					<form @submit.prevent="onSubmit">
						<div class="flex gap-5">
							<div class="relative mb-3 w-3/4 pb-4">
								<div class="mb-3 flex">
									<Input class="border" placeholder="Nomor surat" v-model="mail.reference_number" />
								</div>
								<div class="mb-3 flex">
									<Input class="border" placeholder="Isi" v-model="mail.body" />
								</div>
							</div>
							<div class="relative mb-3 w-1/4">
								<div class="relative mb-3">
									<Input class="border" placeholder="Lampiran" v-model="mail.attachment" />
								</div>
								<div class="relative mb-3">
									<Input class="border" placeholder="Perihal" v-model="mail.subject" />
								</div>
								<div class="relative mb-3">
									<Input class="border" placeholder="Lokasi" v-model="mail.location" />
								</div>
								<div class="relative mb-3">
									<Input class="border" placeholder="Tanggal" v-model="mail.date" type="date" />
								</div>

								<h4 class="mb-1 text-sm italic text-slate-600">Penerima</h4>
								<div class="relative mb-3">
									<Input class="border" placeholder="Nama penerima" v-model="mail.receiver" />
								</div>
								<div class="relative mb-3">
									<Input
										class="border"
										placeholder="Alamat penerima"
										v-model="mail.receiver_address"
									/>
								</div>

								<h4 class="mb-1 text-sm italic text-slate-600">Pengirim</h4>
								<div class="relative mb-3">
									<Input
										class="border"
										placeholder="Jabatan pengirim"
										v-model="mail.sender_position"
									/>
								</div>
								<div class="relative mb-3">
									<Input class="border" placeholder="Nama pengirim" v-model="mail.sender_name" />
								</div>
								<div class="relative mb-3">
									<Input
										class="border"
										placeholder="Jenis identitas pengirim"
										v-model="mail.sender_id_type"
									/>
								</div>
								<div class="relative mb-3">
									<Input
										class="border"
										placeholder="Nomor identitas pengirim"
										v-model="mail.sender_id"
									/>
								</div>
								<div class="relative mb-3">
									<Button type="submit">generate mail</Button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
