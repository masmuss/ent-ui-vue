<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../../stores'
import router from '../../router'

const authStore = useAuthStore()

onMounted(() => {
	authStore.logout()
	router.push({ name: 'login' })
})
</script>

<template>
	<div class="col text-center">
		<div class="spinner-border" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="lead">Please wait...</div>
	</div>
</template>
