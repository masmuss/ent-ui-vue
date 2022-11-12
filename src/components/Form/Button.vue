<script setup>
defineProps({
	type: {
		type: String,
		default: 'button',
	},
	classList: {
		type: String,
		default: '',
	},
})
// 'bg-slate-800  active:bg-slate-600 text-white'
</script>

<template>
	<button
		:class="`mr-1 mb-1 w-full rounded  px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-slate-600 ${
			classList ? 'bg-slate-100 text-slate-800' : 'bg-slate-800  text-white active:bg-slate-600'
		}`"
	>
		<slot />
	</button>
</template>
