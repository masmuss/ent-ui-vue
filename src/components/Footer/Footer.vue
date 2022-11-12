<script setup>
import { ref } from 'vue'

let date = ref(new Date().getFullYear())
</script>

<template>
	<footer class="relative bg-slate-200 pt-8 pb-6">
		<div
			class="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 h-20 w-full overflow-hidden"
			style="transform: translateZ(0)"
		>
			<svg
				class="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon class="fill-current text-slate-200" points="2560 0 2560 100 0 100"></polygon>
			</svg>
		</div>
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap text-center lg:text-left">
				<div class="w-full px-4 lg:w-6/12">
					<h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
					<h5 class="mt-0 mb-2 text-lg text-slate-600">
						Find us on any of these platforms, we respond 1-2 business days.
					</h5>
					<div class="mt-6 mb-6 lg:mb-0">
						<button
							class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-sky-400 shadow-lg outline-none focus:outline-none"
							type="button"
						>
							<i class="fab fa-twitter"></i>
						</button>
						<button
							class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-sky-600 shadow-lg outline-none focus:outline-none"
							type="button"
						>
							<i class="fab fa-facebook-square"></i>
						</button>
						<button
							class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
							type="button"
						>
							<i class="fab fa-dribbble"></i>
						</button>
						<button
							class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal text-slate-800 shadow-lg outline-none focus:outline-none"
							type="button"
						>
							<i class="fab fa-github"></i>
						</button>
					</div>
				</div>
				<div class="w-full px-4 lg:w-6/12">
					<div class="items-top mb-6 flex flex-wrap">
						<div class="ml-auto w-full px-4 lg:w-4/12">
							<span class="mb-2 block text-sm font-semibold uppercase text-slate-500">
								Useful Links
							</span>
							<ul class="list-unstyled">
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://www.creative-tim.com/presentation?ref=vn-footer"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://blog.creative-tim.com?ref=vn-footer"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://www.github.com/creativetimofficial?ref=vn-footer"
									>
										Github
									</a>
								</li>
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer"
									>
										Free Products
									</a>
								</li>
							</ul>
						</div>
						<div class="w-full px-4 lg:w-4/12">
							<span class="mb-2 block text-sm font-semibold uppercase text-slate-500">
								Other Resources
							</span>
							<ul class="list-unstyled">
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer"
									>
										MIT License
									</a>
								</li>
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://creative-tim.com/terms?ref=vn-footer"
									>
										Terms & Conditions
									</a>
								</li>
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://creative-tim.com/privacy?ref=vn-footer"
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										class="block pb-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
										href="https://creative-tim.com/contact-us?ref=vn-footer"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr class="my-6 border-slate-300" />
			<div class="flex flex-wrap items-center justify-center md:justify-between">
				<div class="mx-auto w-full px-4 text-center md:w-4/12">
					<div class="py-1 text-sm font-semibold text-slate-500">
						Copyright © {{ date }} Vue Notus by
						<a
							href="https://www.creative-tim.com?ref=vn-footer"
							class="text-slate-500 hover:text-slate-800"
						>
							Creative Tim
						</a>
						.
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
