<script setup>
defineProps({
	statSubtitle: {
		type: String,
		default: 'Traffic',
	},
	statTitle: {
		type: String,
		default: '350,897',
	},
	statArrow: {
		default: 'up',
		validator: function (value) {
			return ['up', 'down'].indexOf(value) !== -1
		},
	},
	statPercent: {
		type: String,
		default: '3.48',
	},
	statPercentColor: {
		type: String,
		default: 'text-emerald-500',
	},
	statDescripiron: {
		type: String,
		default: 'Since last month',
	},
	statIconName: {
		type: String,
		default: 'far fa-chart-bar',
	},
	statIconColor: {
		type: String,
		default: 'bg-red-500',
	},
})
</script>

<template>
	<div
		class="relative mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0"
	>
		<div class="flex-auto p-4">
			<div class="flex flex-wrap">
				<div class="relative w-full max-w-full flex-1 flex-grow pr-4">
					<h5 class="text-xs font-bold uppercase text-blueGray-400">
						{{ statSubtitle }}
					</h5>
					<span class="text-xl font-semibold text-blueGray-700">
						{{ statTitle }}
					</span>
				</div>
				<div class="relative w-auto flex-initial pl-4">
					<div
						class="inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg"
						:class="[statIconColor]"
					>
						<i :class="[statIconName]"></i>
					</div>
				</div>
			</div>
			<p class="mt-4 text-sm text-blueGray-400">
				<span class="mr-2" :class="[statPercentColor]">
					<i
						:class="[
							statArrow === 'up'
								? `fas fa-arrow-up`
								: `fas fa-arrow-down`,
						]"
					></i>
					{{ statPercent }}%
				</span>
				<span class="whitespace-nowrap">{{ statDescripiron }}</span>
			</p>
		</div>
	</div>
</template>
