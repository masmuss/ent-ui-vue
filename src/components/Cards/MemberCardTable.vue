<script setup>
import { ref, reactive, defineProps } from 'vue'
defineProps({
	text: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div
		class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-solid border-white bg-slate-300 text-slate-800"
	>
		{{ text }}
	</div>
</template>
