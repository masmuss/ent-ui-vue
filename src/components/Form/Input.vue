<script setup>
defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	class: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<input
		type="text"
		class="w-full rounded border-0 bg-white p-3 text-sm text-slate-600 placeholder-slate-400 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
		:class="class"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		v-bind="$attrs"
	/>
</template>
