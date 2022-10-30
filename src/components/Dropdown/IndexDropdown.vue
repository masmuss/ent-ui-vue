<script setup>
import { createPopper } from '@popperjs/core'
import { ref } from 'vue'

let dropdownPopoverShow = ref(false)
let btnDropdownRef = ref(null)
let popoverDropdownRef = ref(null)

const toggleDropdown = (event) => {
	event.preventDefault()
	if (dropdownPopoverShow.value) {
		dropdownPopoverShow.value = !dropdownPopoverShow.value
	} else {
		dropdownPopoverShow.value = !dropdownPopoverShow.value
		createPopper(btnDropdownRef.value, popoverDropdownRef.value, {
			placement: 'bottom-start',
		})
	}
}
</script>

<template>
	<div>
		<a
			class="flex cursor-pointer items-center px-3 py-2 text-xs font-bold uppercase text-slate-700 hover:text-slate-500"
			ref="btnDropdownRef"
			v-on:click="toggleDropdown($event)"
		>
			Demo Pages
		</a>
		<div
			ref="popoverDropdownRef"
			class="z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg"
			v-bind:class="{
				hidden: !dropdownPopoverShow,
				block: dropdownPopoverShow,
			}"
		>
			<span
				class="block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400"
			>
				Admin Layout
			</span>
			<router-link
				to="/admin/dashboard"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Dashboard
			</router-link>
			<router-link
				to="/admin/settings"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Settings
			</router-link>
			<router-link
				to="/admin/tables"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Tables
			</router-link>
			<router-link
				to="/admin/maps"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Maps
			</router-link>
			<div class="mx-4 my-2 h-0 border border-solid border-slate-100" />
			<span
				class="block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400"
			>
				Auth Layout
			</span>
			<router-link
				to="/auth/login"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Login
			</router-link>
			<router-link
				to="/auth/register"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Register
			</router-link>
			<div class="mx-4 my-2 h-0 border border-solid border-slate-100" />
			<span
				class="block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-slate-400"
			>
				No Layout
			</span>
			<router-link
				to="/landing"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Landing
			</router-link>
			<router-link
				to="/profile"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Profile
			</router-link>
		</div>
	</div>
</template>
