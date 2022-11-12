<template>
	<div>
		<a class="text-blueGray-500 py-1 px-3" href="#pablo" ref="btnDropdownRef" v-on:click="toggleDropdown($event)">
			<i class="fas fa-ellipsis-v"></i>
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
				class="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
			>
				Action
			</a>
			<a
				href="javascript:void(0);"
				class="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
			>
				Another action
			</a>
			<a
				href="javascript:void(0);"
				class="text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal"
			>
				Something else here
			</a>
		</div>
	</div>
</template>
<script>
import { createPopper } from '@popperjs/core'

export default {
	data() {
		return {
			dropdownPopoverShow: false,
		}
	},
	methods: {
		toggleDropdown: function (event) {
			event.preventDefault()
			if (this.dropdownPopoverShow) {
				this.dropdownPopoverShow = false
			} else {
				this.dropdownPopoverShow = true
				createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
					placement: 'bottom-start',
				})
			}
		},
	},
}
</script>
