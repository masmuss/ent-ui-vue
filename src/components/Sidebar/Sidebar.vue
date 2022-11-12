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
				class="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-slate-600 md:block md:pb-2"
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
				<div class="mb-4 block border-b border-solid border-slate-200 pb-4 md:hidden md:min-w-full">
					<div class="flex flex-wrap">
						<div class="w-6/12">
							<router-link
								class="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-slate-600 md:block md:pb-2"
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
							class="h-12 w-full rounded border-0 border-solid border-slate-500 bg-white px-3 py-2 text-base font-normal leading-snug text-slate-600 placeholder-slate-300 shadow-none outline-none focus:outline-none"
						/>
					</div>
				</form>

				<!-- Divider -->
				<hr class="my-4 md:min-w-full" />
				<!-- Heading -->
				<h6 class="block pt-1 pb-4 text-xs font-bold uppercase text-slate-500 no-underline md:min-w-full">
					Admin
				</h6>
				<!-- Navigation -->

				<ul class="flex list-none flex-col md:min-w-full md:flex-col">
					<li class="items-center">
						<router-link to="/admin/dashboard" v-slot="{ href, navigate, isActive }">
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-slate-700 hover:text-slate-500',
								]"
							>
								<i
									class="fas fa-tv mr-2 text-sm"
									:class="[isActive ? 'opacity-75' : 'text-slate-300']"
								></i>
								Dashboard
							</a>
						</router-link>
					</li>

					<li class="items-center">
						<router-link :to="{ name: 'setting' }" v-slot="{ href, navigate, isActive }">
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-slate-700 hover:text-slate-500',
								]"
							>
								<i
									class="fas fa-tools mr-2 text-sm"
									:class="[isActive ? 'opacity-75' : 'text-slate-300']"
								></i>
								Settings
							</a>
						</router-link>
					</li>
				</ul>

				<!-- Divider -->
				<hr class="my-4 md:min-w-full" />
				<!-- Heading -->
				<h6 class="block pt-1 pb-4 text-xs font-bold uppercase text-slate-500 no-underline md:min-w-full">
					Collections
				</h6>
				<!-- Navigation -->

				<ul class="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
					<li class="items-center">
						<router-link :to="{ name: 'division' }" v-slot="{ href, navigate, isActive }">
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-slate-700 hover:text-slate-500',
								]"
							>
								<i
									:class="[isActive ? 'opacity-75' : 'text-slate-300']"
									class="fas fa-fingerprint mr-2 text-sm text-slate-300"
								></i>

								Divisions
							</a>
						</router-link>
					</li>

					<li class="items-center">
						<router-link :to="{ name: 'department' }" v-slot="{ href, navigate, isActive }">
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-slate-700 hover:text-slate-500',
								]"
							>
								<i
									:class="[isActive ? 'opacity-75' : 'text-slate-300']"
									class="fas fa-building mr-2 text-sm text-slate-300"
								></i>

								Department
							</a>
						</router-link>
					</li>

					<li class="items-center">
						<router-link :to="{ name: 'member' }" v-slot="{ href, navigate, isActive }">
							<a
								:href="href"
								@click="navigate"
								class="block py-3 text-xs font-bold uppercase"
								:class="[
									isActive
										? 'text-emerald-500 hover:text-emerald-600'
										: 'text-slate-700 hover:text-slate-500',
								]"
							>
								<i
									:class="[isActive ? 'opacity-75' : 'text-slate-300']"
									class="fas fa-users mr-2 text-sm text-slate-300"
								></i>

								Members
							</a>
						</router-link>
					</li>

					<li class="items-center">
						<router-link
							class="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-slate-500"
							to="/auth/register"
						>
							<i class="fas fa-clipboard-list mr-2 text-sm text-slate-300"></i>
							Register
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
