<script setup>
defineProps({
	error: {
		type: String,
		default: null,
	},
})
</script>

<template>
	<div
		class="mb-2 w-full rounded border border-red-600 bg-red-100 px-3 py-2 text-sm text-red-500"
	>
		{{ error }}
	</div>
</template>
