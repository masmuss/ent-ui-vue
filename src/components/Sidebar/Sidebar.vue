<script setup>
import UserDropdown from '../Dropdown/UserDropdown.vue'
import { ref } from 'vue'

let collapseShow = ref('hidden')

const toggleCollapseShow = (classes) => {
	if (collapseShow.value === 'hidden') {
		collapseShow.value = classes
	} else {
		collapseShow.value = 'hidden'
	}
}
</script>

<template>
	<nav
		class="relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto"
	>
		<div
			class="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch"
		>
			<!-- Toggler -->
			<button
				class="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
				type="button"
				v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
			>
				<i class="fas fa-bars"></i>
			</button>
			<!-- Brand -->
			<router-link
				class="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-blueGray-600 md:block md:pb-2"
				to="/"
			>
				Vue Notus
			</router-link>
			<!-- User -->
			<ul class="flex list-none flex-wrap items-center md:hidden">
				<li class="relative inline-block">
					<UserDropdown />
				</li>
			</ul>
			<!-- Collapse -->
			<div
				class="absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none"
				v-bind:class="collapseShow"
			>
				<!-- Collapse header -->
				<div
					class="mb-4 block border-b border-solid border-blueGray-200 pb-4 md:hidden md:min-w-full"
				>
					<div class="flex flex-wrap">
						<div class="w-6/12">
							<router-link
								class="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-blueGray-600 md:block md:pb-2"
								to="/"
							>
								Vue Notus
							</router-link>
						</div>
						<div class="flex w-6/12 justify-end">
							<button
								type="button"
								class="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
								v-on:click="toggleCollapseShow('hidden')"
							>
								<i class="fas fa-times"></i>
							</button>
						</div>
					</div>
				</div>
				<!-- Form -->
				<form class="mt-6 mb-4 md:hidden">
					<div class="mb-3 pt-0">
						<input
							type="text"
							placeholder="Search"
							class="h-12 w-full rounded border-0 border-solid border-blueGray-500 bg-white px-3 py-2 text-base font-normal leading-snug text-blueGray-600 placeholder-blueGray-300 shadow-none outline-none focus:outline-none"
						/>
					</div>
				</form>

				<!-- Divider -->
				<hr class="my-4 md:min-w-full" />
				<!-- Heading -->
				<h6
					class="block pt-1 pb-4 text-xs font-bold uppercase text-blueGray-500 no-underline md:min-w-full"
				>
					Admin Layout Pages
				</h6>
				<!-- Navigation -->

				<ul class="flex list-none flex-col md:min-w-full md:flex-col">
					<li class="items-center">
						<router-link
							to="/admin/dashboard"
							v-slot="{ href, navigate, isActive }"
						>
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-blueGray-700 hover:text-blueGray-500',
								]"
							>
								<i
									class="fas fa-tv mr-2 text-sm"
									:class="[
										isActive
											? 'opacity-75'
											: 'text-blueGray-300',
									]"
								></i>
								Dashboard
							</a>
						</router-link>
					</li>

					<li class="items-center">
						<router-link
							to="/admin/settings"
							v-slot="{ href, navigate, isActive }"
						>
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-blueGray-700 hover:text-blueGray-500',
								]"
							>
								<i
									class="fas fa-tools mr-2 text-sm"
									:class="[
										isActive
											? 'opacity-75'
											: 'text-blueGray-300',
									]"
								></i>
								Settings
							</a>
						</router-link>
					</li>

					<li class="items-center">
						<router-link
							to="/admin/tables"
							v-slot="{ href, navigate, isActive }"
						>
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-blueGray-700 hover:text-blueGray-500',
								]"
							>
								<i
									class="fas fa-table mr-2 text-sm"
									:class="[
										isActive
											? 'opacity-75'
											: 'text-blueGray-300',
									]"
								></i>
								Tables
							</a>
						</router-link>
					</li>

					<li class="items-center">
						<router-link
							to="/admin/maps"
							v-slot="{ href, navigate, isActive }"
						>
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-blueGray-700 hover:text-blueGray-500',
								]"
							>
								<i
									class="fas fa-map-marked mr-2 text-sm"
									:class="[
										isActive
											? 'opacity-75'
											: 'text-blueGray-300',
									]"
								></i>
								Maps
							</a>
						</router-link>
					</li>
				</ul>

				<!-- Divider -->
				<hr class="my-4 md:min-w-full" />
				<!-- Heading -->
				<h6
					class="block pt-1 pb-4 text-xs font-bold uppercase text-blueGray-500 no-underline md:min-w-full"
				>
					Auth Layout Pages
				</h6>
				<!-- Navigation -->

				<ul
					class="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col"
				>
					<li class="items-center">
						<router-link
							class="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
							to="/auth/login"
						>
							<i
								class="fas fa-fingerprint mr-2 text-sm text-blueGray-300"
							></i>
							Login
						</router-link>
					</li>

					<li class="items-center">
						<router-link
							class="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
							to="/auth/register"
						>
							<i
								class="fas fa-clipboard-list mr-2 text-sm text-blueGray-300"
							></i>
							Register
						</router-link>
					</li>
				</ul>

				<!-- Divider -->
				<hr class="my-4 md:min-w-full" />
				<!-- Heading -->
				<h6
					class="block pt-1 pb-4 text-xs font-bold uppercase text-blueGray-500 no-underline md:min-w-full"
				>
					No Layout Pages
				</h6>
				<!-- Navigation -->

				<ul
					class="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col"
				>
					<li class="items-center">
						<router-link
							class="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
							to="/landing"
						>
							<i
								class="fas fa-newspaper mr-2 text-sm text-blueGray-300"
							></i>
							Landing Page
						</router-link>
					</li>

					<li class="items-center">
						<router-link
							class="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500"
							to="/profile"
						>
							<i
								class="fas fa-user-circle mr-2 text-sm text-blueGray-300"
							></i>
							Profile Page
						</router-link>
					</li>
				</ul>

				<!-- Divider -->
				<hr class="my-4 md:min-w-full" />
				<!-- Heading -->
				<h6
					class="block pt-1 pb-4 text-xs font-bold uppercase text-blueGray-500 no-underline md:min-w-full"
				>
					Documentation
				</h6>
				<!-- Navigation -->
				<ul
					class="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col"
				>
					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fas fa-paint-brush mr-2 text-base text-blueGray-300"
							></i>
							Styles
						</a>
					</li>

					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fab fa-css3-alt mr-2 text-base text-blueGray-300"
							></i>
							CSS Components
						</a>
					</li>

					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fab fa-angular mr-2 text-base text-blueGray-300"
							></i>
							Angular
						</a>
					</li>

					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fab fa-js-square mr-2 text-base text-blueGray-300"
							></i>
							Javascript
						</a>
					</li>

					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fab fa-react mr-2 text-base text-blueGray-300"
							></i>
							NextJS
						</a>
					</li>

					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fab fa-react mr-2 text-base text-blueGray-300"
							></i>
							React
						</a>
					</li>

					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fas fa-link mr-2 text-base text-blueGray-300"
							></i>
							Svelte
						</a>
					</li>

					<li class="inline-flex">
						<a
							href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
							target="_blank"
							class="mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500"
						>
							<i
								class="fab fa-vuejs mr-2 text-base text-blueGray-300"
							></i>
							VueJS
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
