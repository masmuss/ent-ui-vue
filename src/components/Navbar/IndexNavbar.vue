<script setup>
import { ref } from 'vue'
import IndexDropdown from '../Dropdown/IndexDropdown.vue'

let navbarOpen = ref(false)

const setNavbarOpen = () => {
	navbarOpen.value = !navbarOpen.value
}
</script>
<template>
	<nav
		class="navbar-expand-lg fixed top-0 z-50 flex w-full flex-wrap items-center justify-between bg-white px-2 py-3 shadow"
	>
		<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
			<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
				<router-link to="/">
					<a
						class="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-slate-700"
						href="#pablo"
					>
						Vue Notus
					</a>
				</router-link>
				<button
					class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
					type="button"
					v-on:click="setNavbarOpen"
				>
					<i class="fas fa-bars"></i>
				</button>
			</div>
			<div
				class="flex-grow items-center lg:flex"
				:class="[navbarOpen ? 'block' : 'hidden']"
				id="example-navbar-warning"
			>
				<ul class="mr-auto flex list-none flex-col lg:flex-row">
					<li class="flex items-center">
						<a
							class="flex items-center px-3 py-2 text-xs font-bold uppercase text-slate-700 hover:text-slate-500"
							href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"
						>
							<i class="far fa-file-alt leading-lg mr-2 text-lg text-slate-400" />
							Docs
						</a>
					</li>
				</ul>
				<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
					<li class="flex items-center">
						<IndexDropdown />
					</li>
					<li class="flex items-center">
						<a
							class="flex items-center px-3 py-2 text-xs font-bold uppercase text-slate-700 hover:text-slate-500"
							href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F"
							target="_blank"
						>
							<i class="fab fa-facebook leading-lg text-lg text-slate-400" />
							<span class="ml-2 inline-block lg:hidden">Share</span>
						</a>
					</li>

					<li class="flex items-center">
						<router-link
							to="/auth/login"
							class="ml-3 mb-3 rounded bg-emerald-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600 lg:mr-1 lg:mb-0"
						>
							Login
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
