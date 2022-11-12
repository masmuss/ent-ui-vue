<script setup>
// import PagesDropdown from '../Dropdown/PagesDropdown.vue'
import { ref } from 'vue'

let navbarOpen = ref(false)

const setNavbarOpen = () => {
	navbarOpen = !navbarOpen
}
</script>

<template>
	<nav class="navbar-expand-lg absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3">
		<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
			<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
				<router-link
					class="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white"
					to="/"
				>
					Vue Notus
				</router-link>
				<button
					class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
					type="button"
					v-on:click="setNavbarOpen"
				>
					<i class="fas fa-bars text-white"></i>
				</button>
			</div>
			<div
				class="flex-grow items-center bg-white lg:flex lg:bg-opacity-0 lg:shadow-none"
				:class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
				id="example-navbar-warning"
			>
				<ul class="mr-auto flex list-none flex-col lg:flex-row">
					<li class="flex items-center">
						<a
							class="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
							href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"
						>
							<i class="far fa-file-alt leading-lg mr-2 text-lg text-slate-400 lg:text-slate-200" />
							Docs
						</a>
					</li>
				</ul>
				<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
					<li class="flex items-center"></li>
					<li class="flex items-center">
						<a
							class="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
							href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F"
							target="_blank"
						>
							<i class="fab fa-facebook leading-lg text-lg text-slate-400 lg:text-slate-200" />
							<span class="ml-2 inline-block lg:hidden">Share</span>
						</a>
					</li>

					<li class="flex items-center">
						<a
							class="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
							href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
							target="_blank"
						>
							<i class="fab fa-twitter leading-lg text-lg text-slate-400 lg:text-slate-200" />
							<span class="ml-2 inline-block lg:hidden">Tweet</span>
						</a>
					</li>

					<li class="flex items-center">
						<a
							class="flex items-center px-3 py-4 text-xs font-bold uppercase text-slate-700 lg:py-2 lg:text-white lg:hover:text-slate-200"
							href="https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar"
							target="_blank"
						>
							<i class="fab fa-github leading-lg text-lg text-slate-400 lg:text-slate-200" />
							<span class="ml-2 inline-block lg:hidden">Star</span>
						</a>
					</li>

					<li class="flex items-center">
						<button
							class="ml-3 mb-3 rounded bg-white px-4 py-2 text-xs font-bold uppercase text-slate-700 shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-slate-50 lg:mr-1 lg:mb-0"
							type="button"
						>
							<i class="fas fa-arrow-alt-circle-down"></i>
							Download
						</button>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
