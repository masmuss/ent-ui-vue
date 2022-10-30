<script setup>
// import CardLineChart from '../../components/Cards/CardLineChart.vue'
// import CardBarChart from '../../components/Cards/CardBarChart.vue'
import CardPageVisits from '../../components/Cards/CardPageVisits.vue'
import CardSocialTraffic from '../../components/Cards/CardSocialTraffic.vue'
</script>
<template>
	<div>
		<div class="flex flex-wrap">
			<div class="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
				<!-- <CardLineChart /> -->
			</div>
			<div class="w-full px-4 xl:w-4/12">
				<!-- <CardBarChart /> -->
			</div>
		</div>
		<div class="mt-4 flex flex-wrap">
			<div class="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
				<CardPageVisits />
			</div>
			<div class="w-full px-4 xl:w-4/12">
				<CardSocialTraffic />
			</div>
		</div>
	</div>
</template>
