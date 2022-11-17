<script>
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'
import router from '../../router'
import printJS from 'print-js'
import Button from '../../components/Form/Button.vue'

export default {
	setup() {
		const mail = ref([])
		let printFormat = reactive({
			paperSize: 'A4',
			margin: '',
		})

		onMounted(async () => {
			await axios.get(`/api/mailings/${router.currentRoute.value.params.id}`).then((result) => {
				mail.value = result.data.data
			})
		})

		function printPDF() {
			const prtHtml = document.getElementById('letter').innerHTML
			let w = window.open()
			w.document.write(prtHtml)
			w.document.close()
			w.setTimeout(() => {
				w.print()
			}, 1000)
		}

		return {
			mail,
			printJS,
			printPDF,
		}
	},
	components: {
		Button,
	},
}
</script>

<template>
	<div class="mb-12 w-full px-4">
		<div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
			<div class="mb-0 rounded-t border-0 px-4 py-3">
				<div class="flex flex-wrap items-center">
					<div class="relative flex w-full max-w-full flex-grow items-center justify-between px-4">
						<h3 class="bg-white text-lg font-semibold">Preview letter</h3>
						<div>
							<Button @click="printPDF">Print PDF</Button>
						</div>
					</div>
				</div>
			</div>
			<div class="block w-full p-5">
				<div class="flex flex-row">
					<!-- letter view -->
					<div class="flex h-[297mm] w-[210mm] flex-col border font-serif text-sm shadow" id="letter">
						<header class="flex items-center justify-center p-5 text-lg font-bold uppercase">
							Kop surat
						</header>
						<div class="mt-1 h-0.5 bg-black opacity-60"></div>
						<div class="flex h-full flex-col justify-between p-[20mm] pl-[30mm]">
							<div>
								<div class="mt-5 flex justify-between">
									<table>
										<tr>
											<td>Nomor</td>
											<td>&nbsp;:&nbsp;</td>
											<td>{{ mail.reference_number }}</td>
										</tr>
										<tr>
											<td>Lampiran</td>
											<td>&nbsp;:&nbsp;</td>
											<td>{{ mail.attachment }}</td>
										</tr>
										<tr>
											<td>Perihal</td>
											<td>&nbsp;:&nbsp;</td>
											<td>{{ mail.subject }}</td>
										</tr>
									</table>
									<p>
										{{ mail.location }},
										{{
											new Date(mail.created_at).toLocaleDateString('id-ID', {
												day: 'numeric',
												year: 'numeric',
												month: 'long',
											})
										}}
									</p>
								</div>

								<div class="mt-5 flex w-full justify-end">
									<div class="w-1/4">
										<p>Kepada Yth.</p>
										<p>{{ mail.receiver }}</p>
										<p>di -</p>
										<p class="text-center">{{ mail.receiver_address }}</p>
									</div>
								</div>

								<div class="mt-8">
									<p>{{ mail.body }}</p>
								</div>
							</div>

							<div class="flex w-full justify-end">
								<div class="w-1/4 text-center">
									<p>Hormat Kami,</p>
									<p>{{ mail.sender_position }}</p>
									<p class="mt-16">{{ mail.sender_name }}</p>
									<p>{{ mail.sender_id_type }}. {{ mail.sender_id }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
