<script setup>
defineProps({
	messages: {
		type: String,
	},
})
</script>

<template>
	<div class="mt-2 text-sm text-red-600">
		{{ messages }}
	</div>
</template>
