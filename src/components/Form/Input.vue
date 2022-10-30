<script setup>
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<input
		type="text"
		class="w-full rounded border-0 bg-white p-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		v-bind="$attrs"
	/>
</template>
