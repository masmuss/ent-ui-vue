<script setup>
import { ref } from 'vue'

let date = ref(new Date().getFullYear())
</script>

<template>
	<footer class="block py-4 fixed bottom-0 w-full">
		<div class="container mx-auto px-4">
			<hr class="border-b-1 mb-4 border-slate-200" />
			<div class="flex flex-wrap items-center justify-center md:justify-between">
				<div class="w-full px-4 md:w-4/12">
					<div class="py-1 text-center text-sm font-semibold text-slate-500 md:text-left">
						Copyright © {{ date }}
						<a
							href="https://www.creative-tim.com?ref=vn-footer-admin"
							class="py-1 text-sm font-semibold text-slate-500 hover:text-slate-700"
						>
							Creative Tim
						</a>
					</div>
				</div>
				<div class="w-full px-4 md:w-8/12">
					<ul class="flex list-none flex-wrap justify-center md:justify-end">
						<li>
							<a
								href="https://www.creative-tim.com?ref=vn-footer-admin"
								class="block py-1 px-3 text-sm font-semibold text-slate-600 hover:text-slate-800"
							>
								Creative Tim
							</a>
						</li>
						<li>
							<a
								href="https://www.creative-tim.com/presentation?ref=vn-footer-admin"
								class="block py-1 px-3 text-sm font-semibold text-slate-600 hover:text-slate-800"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="http://blog.creative-tim.com?ref=vn-footer-admin"
								class="block py-1 px-3 text-sm font-semibold text-slate-600 hover:text-slate-800"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer-admin"
								class="block py-1 px-3 text-sm font-semibold text-slate-600 hover:text-slate-800"
							>
								MIT License
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>
