<script setup>
defineProps({
	messages: {
		type: String,
	},
})
</script>

<template>
	<div class="mx-1 my-1 text-sm font-semibold tracking-wide text-red-600">
		{{ messages }}
	</div>
</template>
