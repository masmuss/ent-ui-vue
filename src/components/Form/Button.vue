<script setup>
defineProps({
	type: {
		type: String,
		default: 'button',
	},
})
</script>

<template>
	<button
		class="mr-1 mb-1 w-full rounded bg-slate-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-600"
	>
		<slot />
	</button>
</template>
