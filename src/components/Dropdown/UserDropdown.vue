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
			class="block text-slate-500"
			href="#pablo"
			ref="btnDropdownRef"
			v-on:click="toggleDropdown($event)"
		>
			<div class="flex items-center">
				<span
					class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm text-white"
				>
				</span>
			</div>
		</a>
		<div
			ref="popoverDropdownRef"
			class="z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg"
			v-bind:class="{
				hidden: !dropdownPopoverShow,
				block: dropdownPopoverShow,
			}"
		>
			<a
				href="javascript:void(0);"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Action
			</a>
			<a
				href="javascript:void(0);"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Another action
			</a>
			<a
				href="javascript:void(0);"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Something else here
			</a>
			<div class="my-2 h-0 border border-solid border-slate-100" />
			<a
				href="javascript:void(0);"
				class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-slate-700"
			>
				Seprated link
			</a>
		</div>
	</div>
</template>
