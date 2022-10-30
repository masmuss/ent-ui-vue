<script setup>
import IndexNavbar from '../components/Navbar/IndexNavbar.vue'
import FooterComponent from '../components/Footer/Footer.vue'

import patternVue from '../assets/img/pattern_vue.png'
import componentBtn from '../assets/img/component-btn.png'
import componentProfileCard from '../assets/img/component-profile-card.png'
import componentInfoCard from '../assets/img/component-info-card.png'
import componentInfo2 from '../assets/img/component-info-2.png'
import componentMenu from '../assets/img/component-menu.png'
import componentBtnPink from '../assets/img/component-btn-pink.png'
import documentation from '../assets/img/documentation.png'
import login from '../assets/img/login.jpg'
import profile from '../assets/img/profile.jpg'
import landing from '../assets/img/landing.jpg'
</script>

<template>
	<div>
		<IndexNavbar />
		<section
			class="header relative flex h-screen max-h-860-px items-center pt-16"
		>
			<div class="container mx-auto flex flex-wrap items-center">
				<div class="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
					<div class="pt-32 sm:pt-0">
						<h2 class="text-4xl font-semibold text-slate-600">
							Vue Notus - A beautiful extension for Tailwind CSS.
						</h2>
						<p class="mt-4 text-lg leading-relaxed text-slate-500">
							Vue Notus is Free and Open Source. It does not
							change any of the CSS from
							<a
								href="https://tailwindcss.com/?ref=creativetim"
								class="text-slate-600"
								target="_blank"
							>
								Tailwind CSS.
							</a>
							It features multiple HTML elements and it comes with
							dynamic components for ReactJS, Vue and Angular.
						</p>
						<div class="mt-12">
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
								target="_blank"
								class="get-started mr-1 mb-1 rounded bg-emerald-500 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
							>
								Get started
							</a>
							<a
								href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
								class="github-star ml-1 mr-1 mb-1 rounded bg-slate-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-600"
								target="_blank"
							>
								Github Star
							</a>
						</div>
					</div>
				</div>
			</div>

			<img
				class="b-auto absolute top-0 right-0 -mt-48 max-h-860-px w-10/12 pt-16 sm:mt-0 sm:w-6/12"
				:src="patternVue"
				alt="..."
			/>
		</section>

		<section class="relative mt-48 bg-slate-100 pb-40 md:mt-40">
			<div
				class="absolute top-0 bottom-auto left-0 right-0 -mt-20 h-20 w-full"
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
					<polygon
						class="fill-current text-slate-100"
						points="2560 0 2560 100 0 100"
					></polygon>
				</svg>
			</div>
			<div class="container mx-auto">
				<div class="flex flex-wrap items-center">
					<div
						class="mr-auto ml-auto -mt-32 w-10/12 px-12 md:w-6/12 md:px-4 lg:w-4/12"
					>
						<div
							class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-emerald-500 shadow-lg"
						>
							<img
								alt="..."
								src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
								class="w-full rounded-t-lg align-middle"
							/>
							<blockquote class="relative mb-4 p-8">
								<svg
									preserveAspectRatio="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 583 95"
									class="absolute left-0 -top-94-px block h-95-px w-full"
								>
									<polygon
										points="-30,95 583,95 583,65"
										class="fill-current text-emerald-500"
									></polygon>
								</svg>
								<h4 class="text-xl font-bold text-white">
									Great for your awesome project
								</h4>
								<p class="text-md mt-2 font-light text-white">
									Putting together a page has never been
									easier than matching together pre-made
									components. From landing pages presentation
									to login areas, you can easily customise and
									built your pages.
								</p>
							</blockquote>
						</div>
					</div>

					<div class="w-full px-4 md:w-6/12">
						<div class="flex flex-wrap">
							<div class="w-full px-4 md:w-6/12">
								<div class="relative mt-4 flex flex-col">
									<div class="flex-auto px-4 py-5">
										<div
											class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
										>
											<i class="fas fa-sitemap"></i>
										</div>
										<h6 class="mb-1 text-xl font-semibold">
											CSS Components
										</h6>
										<p class="mb-4 text-slate-500">
											Vue Notus comes with a huge number
											of Fully Coded CSS components.
										</p>
									</div>
								</div>
								<div class="relative flex min-w-0 flex-col">
									<div class="flex-auto px-4 py-5">
										<div
											class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
										>
											<i
												class="fas fa-drafting-compass"
											></i>
										</div>
										<h6 class="mb-1 text-xl font-semibold">
											JavaScript Components
										</h6>
										<p class="mb-4 text-slate-500">
											We also feature many dynamic
											components for React, NextJS, Vue
											and Angular.
										</p>
									</div>
								</div>
							</div>
							<div class="w-full px-4 md:w-6/12">
								<div
									class="relative mt-4 flex min-w-0 flex-col"
								>
									<div class="flex-auto px-4 py-5">
										<div
											class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
										>
											<i class="fas fa-newspaper"></i>
										</div>
										<h6 class="mb-1 text-xl font-semibold">
											Pages
										</h6>
										<p class="mb-4 text-slate-500">
											This extension also comes with 3
											sample pages. They are fully coded
											so you can start working instantly.
										</p>
									</div>
								</div>
								<div class="relative flex min-w-0 flex-col">
									<div class="flex-auto px-4 py-5">
										<div
											class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
										>
											<i class="fas fa-file-alt"></i>
										</div>
										<h6 class="mb-1 text-xl font-semibold">
											Documentation
										</h6>
										<p class="mb-4 text-slate-500">
											Built by developers for developers.
											You will love how easy is to to work
											with Vue Notus.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container mx-auto overflow-hidden pb-20">
				<div class="flex flex-wrap items-center">
					<div
						class="ml-auto mr-auto mt-48 w-full px-12 md:w-4/12 md:px-4"
					>
						<div
							class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
						>
							<i class="fas fa-sitemap text-xl"></i>
						</div>
						<h3 class="mb-2 text-3xl font-semibold leading-normal">
							CSS Components
						</h3>
						<p
							class="mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600"
						>
							Every element that you need in a product comes built
							in as a component. All components fit perfectly with
							each other and can have different colours.
						</p>
						<div class="block pb-6">
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Buttons
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Inputs
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Labels
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Menus
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Navbars
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Pagination
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Progressbars
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Typography
							</span>
						</div>
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
							target="_blank"
							class="font-bold text-slate-700 transition-all duration-150 ease-linear hover:text-slate-500"
						>
							View All
							<i
								class="fa fa-angle-double-right ml-1 leading-relaxed"
							></i>
						</a>
					</div>

					<div class="mr-auto ml-auto mt-32 w-full px-4 md:w-5/12">
						<div
							class="relative mb-6 mt-48 flex w-full min-w-0 flex-col md:mt-0"
						>
							<img
								alt="..."
								:src="componentBtn"
								class="absolute left-145-px -top-29-px z-3 w-full max-w-100-px rounded align-middle shadow-lg"
							/>
							<img
								alt="..."
								:src="componentProfileCard"
								class="absolute left-260-px -top-160-px w-full max-w-210-px rounded-lg align-middle shadow-lg"
							/>
							<img
								alt="..."
								:src="componentInfoCard"
								class="absolute left-40-px -top-225-px z-2 w-full max-w-180-px rounded-lg align-middle shadow-lg"
							/>
							<img
								alt="..."
								:src="componentInfo2"
								class="absolute -left-50-px top-25-px w-full max-w-200-px rounded-lg align-middle shadow-2xl"
							/>
							<img
								alt="..."
								:src="componentMenu"
								class="absolute -left-20-px top-210-px w-full max-w-580-px rounded align-middle shadow-lg"
							/>
							<img
								alt="..."
								:src="componentBtnPink"
								class="absolute left-195-px top-95-px w-full max-w-120-px rounded align-middle shadow-xl"
							/>
						</div>
					</div>
				</div>

				<div class="flex flex-wrap items-center pt-32">
					<div class="mr-auto ml-auto mt-32 w-full px-4 md:w-6/12">
						<div class="relative flex flex-wrap justify-center">
							<div class="my-4 w-full px-4 lg:w-6/12">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vn-index"
									target="_blank"
								>
									<div
										class="rounded-lg bg-red-600 p-8 text-center shadow-lg"
									>
										<img
											alt="..."
											class="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
										/>
										<p
											class="mt-4 text-lg font-semibold text-white"
										>
											Svelte
										</p>
									</div>
								</a>
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
									target="_blank"
								>
									<div
										class="mt-8 rounded-lg bg-sky-500 p-8 text-center shadow-lg"
									>
										<img
											alt="..."
											class="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
										/>
										<p
											class="mt-4 text-lg font-semibold text-white"
										>
											ReactJS
										</p>
									</div>
								</a>
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
									target="_blank"
								>
									<div
										class="mt-8 rounded-lg bg-slate-700 p-8 text-center shadow-lg"
									>
										<img
											alt="..."
											class="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
										/>
										<p
											class="mt-4 text-lg font-semibold text-white"
										>
											NextJS
										</p>
									</div>
								</a>
							</div>
							<div class="my-4 w-full px-4 lg:mt-16 lg:w-6/12">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vn-index"
									target="_blank"
								>
									<div
										class="rounded-lg bg-yellow-500 p-8 text-center shadow-lg"
									>
										<img
											alt="..."
											class="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
										/>
										<p
											class="mt-4 text-lg font-semibold text-white"
										>
											JavaScript
										</p>
									</div>
								</a>
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vn-index"
									target="_blank"
								>
									<div
										class="mt-8 rounded-lg bg-red-700 p-8 text-center shadow-lg"
									>
										<img
											alt="..."
											class="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
										/>
										<p
											class="mt-4 text-lg font-semibold text-white"
										>
											Angular
										</p>
									</div>
								</a>
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
									target="_blank"
								>
									<div
										class="mt-8 rounded-lg bg-emerald-500 p-8 text-center shadow-lg"
									>
										<img
											alt="..."
											class="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
										/>
										<p
											class="mt-4 text-lg font-semibold text-white"
										>
											Vue.js
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>

					<div
						class="ml-auto mr-auto mt-48 w-full px-12 md:w-4/12 md:px-4"
					>
						<div
							class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
						>
							<i class="fas fa-drafting-compass text-xl"></i>
						</div>
						<h3 class="mb-2 text-3xl font-semibold leading-normal">
							Javascript Components
						</h3>
						<p
							class="mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600"
						>
							In order to create a great User Experience some
							components require JavaScript. In this way you can
							manipulate the elements on the page and give more
							options to your users.
						</p>
						<p
							class="mt-4 mb-4 text-lg font-light leading-relaxed text-slate-600"
						>
							We created a set of Components that are dynamic and
							come to help you.
						</p>
						<div class="block pb-6">
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Alerts
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Dropdowns
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Menus
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Modals
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Navbars
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Popovers
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Tabs
							</span>
							<span
								class="mr-2 mt-2 inline-block rounded-full bg-white py-1 px-2 text-xs font-semibold uppercase text-slate-500 last:mr-0"
							>
								Tooltips
							</span>
						</div>
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
							target="_blank"
							class="font-bold text-slate-700 transition-all duration-150 ease-linear hover:text-slate-500"
						>
							View all
							<i
								class="fa fa-angle-double-right ml-1 leading-relaxed"
							></i>
						</a>
					</div>
				</div>
			</div>

			<div class="container mx-auto px-4 pb-32 pt-48">
				<div class="flex flex-wrap items-center">
					<div class="ml-auto w-full px-12 md:w-5/12 md:px-4">
						<div class="md:pr-12">
							<div
								class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
							>
								<i class="fas fa-file-alt text-xl"></i>
							</div>
							<h3 class="text-3xl font-semibold">
								Complex Documentation
							</h3>
							<p
								class="mt-4 text-lg leading-relaxed text-slate-500"
							>
								This extension comes a lot of fully coded
								examples that help you get started faster. You
								can adjust the colors and also the programming
								language. You can change the text and images and
								you're good to go.
							</p>
							<ul class="mt-6 list-none">
								<li class="py-2">
									<div class="flex items-center">
										<div>
											<span
												class="mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500"
											>
												<i
													class="fas fa-fingerprint"
												></i>
											</span>
										</div>
										<div>
											<h4 class="text-slate-500">
												Built by Developers for
												Developers
											</h4>
										</div>
									</div>
								</li>
								<li class="py-2">
									<div class="flex items-center">
										<div>
											<span
												class="mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500"
											>
												<i class="fab fa-html5"></i>
											</span>
										</div>
										<div>
											<h4 class="text-slate-500">
												Carefully crafted code for
												Components
											</h4>
										</div>
									</div>
								</li>
								<li class="py-2">
									<div class="flex items-center">
										<div>
											<span
												class="mr-3 inline-block rounded-full bg-slate-50 py-1 px-2 text-xs font-semibold uppercase text-slate-500"
											>
												<i
													class="far fa-paper-plane"
												></i>
											</span>
										</div>
										<div>
											<h4 class="text-slate-500">
												Dynamic Javascript Components
											</h4>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div class="mr-auto w-full px-4 pt-24 md:w-6/12 md:pt-0">
						<img
							alt="..."
							class="max-w-full rounded-lg shadow-xl"
							style="
								transform: scale(1) perspective(1040px)
									rotateY(-11deg) rotateX(2deg) rotate(2deg);
							"
							:src="documentation"
						/>
					</div>
				</div>
			</div>

			<div class="mt-24 flex flex-wrap justify-center text-center">
				<div class="w-full px-12 md:w-6/12 md:px-4">
					<h2 class="text-4xl font-semibold">
						Beautiful Example Pages
					</h2>
					<p class="mt-4 mb-4 text-lg leading-relaxed text-slate-500">
						Vue Notus is a completly new product built using our
						past experience in web templates. Take the examples we
						made for you and start playing with them.
					</p>
				</div>
			</div>
		</section>

		<section class="z-1 relative block bg-slate-600">
			<div class="container mx-auto">
				<div class="flex flex-wrap justify-center">
					<div class="lg:w-12/12 -mt-24 w-full px-4">
						<div class="flex flex-wrap">
							<div class="w-full px-4 lg:w-4/12">
								<h5
									class="pb-4 text-center text-xl font-semibold"
								>
									Login Page
								</h5>
								<router-link to="/auth/login">
									<div
										class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4"
									>
										<img
											alt="..."
											class="h-auto max-w-full rounded-lg border-none align-middle"
											:src="login"
										/>
									</div>
								</router-link>
							</div>

							<div class="w-full px-4 lg:w-4/12">
								<h5
									class="pb-4 text-center text-xl font-semibold"
								>
									Profile Page
								</h5>
								<router-link to="/profile">
									<div
										class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4"
									>
										<img
											alt="..."
											class="h-auto max-w-full rounded-lg border-none align-middle"
											:src="profile"
										/>
									</div>
								</router-link>
							</div>

							<div class="w-full px-4 lg:w-4/12">
								<h5
									class="pb-4 text-center text-xl font-semibold"
								>
									Landing Page
								</h5>
								<router-link to="/landing">
									<div
										class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4"
									>
										<img
											alt="..."
											class="h-auto max-w-full rounded-lg border-none align-middle"
											:src="landing"
										/>
									</div>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="overflow-hidden bg-slate-600 py-20">
			<div class="container mx-auto pb-64">
				<div class="flex flex-wrap justify-center">
					<div
						class="ml-auto mr-auto w-full px-12 md:mt-64 md:w-5/12 md:px-4"
					>
						<div
							class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-slate-500 shadow-lg"
						>
							<i class="fas fa-code-branch text-xl"></i>
						</div>
						<h3
							class="mb-2 text-3xl font-semibold leading-normal text-white"
						>
							Open Source
						</h3>
						<p
							class="mt-4 mb-4 text-lg font-light leading-relaxed text-slate-400"
						>
							Since
							<a
								href="https://tailwindcss.com/?ref=creativetim"
								class="text-slate-300"
								target="_blank"
							>
								Tailwind CSS
							</a>
							is an open source project we wanted to continue this
							movement too. You can give this version a try to
							feel the design and also test the quality of the
							code!
						</p>
						<p
							class="mt-0 mb-4 text-lg font-light leading-relaxed text-slate-400"
						>
							Get it free on Github and please help us spread the
							news with a Star!
						</p>
						<a
							href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
							target="_blank"
							class="github-star mt-4 mr-1 mb-1 inline-block rounded bg-slate-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-600"
						>
							Github Star
						</a>
					</div>

					<div
						class="relative mr-auto ml-auto mt-32 w-full px-4 md:w-4/12"
					>
						<i
							class="fab fa-github absolute -top-150-px -right-100 left-auto text-55 text-slate-700 opacity-80"
						></i>
					</div>
				</div>
			</div>
		</section>

		<section class="relative bg-slate-200 pb-16 pt-32">
			<div
				class="absolute top-0 bottom-auto left-0 right-0 -mt-20 h-20 w-full"
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
					<polygon
						class="fill-current text-slate-200"
						points="2560 0 2560 100 0 100"
					></polygon>
				</svg>
			</div>

			<div class="container mx-auto">
				<div
					class="relative z-10 -mt-64 flex flex-wrap justify-center rounded-lg bg-white py-16 px-12 shadow-xl"
				>
					<div class="w-full text-center lg:w-8/12">
						<p class="text-center text-4xl">
							<span role="img" aria-label="love"> 😍 </span>
						</p>
						<h3 class="text-3xl font-semibold">
							Do you love this Starter Kit?
						</h3>
						<p
							class="mt-4 mb-4 text-lg leading-relaxed text-slate-500"
						>
							Cause if you do, it can be yours now. Hit the
							buttons below to navigate to get the Free version
							for your next project. Build a new web app or give
							an old project a new look!
						</p>
						<div class="mt-10 flex flex-col sm:block">
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
								target="_blank"
								class="get-started mr-1 mb-2 rounded bg-emerald-500 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
							>
								Get started
							</a>
							<a
								href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
								target="_blank"
								class="github-star mr-1 mb-1 rounded bg-slate-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-600 sm:ml-1"
							>
								<i class="fab fa-github mr-1 text-lg"></i>
								<span>Help With a Star</span>
							</a>
						</div>
						<div class="mt-16 text-center"></div>
					</div>
				</div>
			</div>
		</section>
		<footer-component />
	</div>
</template>
