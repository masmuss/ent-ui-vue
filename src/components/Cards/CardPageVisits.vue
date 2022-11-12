<template>
	<div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
		<div class="mb-0 rounded-t border-0 px-4 py-3">
			<div class="flex flex-wrap items-center">
				<div class="relative w-full max-w-full flex-1 flex-grow px-4">
					<h3 class="text-base font-semibold text-slate-700">Page visits</h3>
				</div>
				<div class="relative w-full max-w-full flex-1 flex-grow px-4 text-right">
					<button
						class="mr-1 mb-1 rounded bg-indigo-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-indigo-600"
						type="button"
					>
						See all
					</button>
				</div>
			</div>
		</div>
		<div class="block w-full overflow-x-auto">
			<!-- Projects table -->
			<table class="w-full border-collapse items-center bg-transparent">
				<thead>
					<tr>
						<th
							class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						>
							Page name
						</th>
						<th
							class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						>
							Visitors
						</th>
						<th
							class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						>
							Unique users
						</th>
						<th
							class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						>
							Bounce rate
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							/argon/
						</th>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							4,569
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							340
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							<i class="fas fa-arrow-up mr-4 text-emerald-500"></i>
							46,53%
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							/argon/index.html
						</th>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							3,985
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							319
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							<i class="fas fa-arrow-down mr-4 text-orange-500"></i>
							46,53%
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							/argon/charts.html
						</th>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							3,513
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							294
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							<i class="fas fa-arrow-down mr-4 text-orange-500"></i>
							36,49%
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							/argon/tables.html
						</th>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							2,050
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							147
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							<i class="fas fa-arrow-up mr-4 text-emerald-500"></i>
							50,87%
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							/argon/profile.html
						</th>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							1,795
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							190
						</td>
						<td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
							<i class="fas fa-arrow-down mr-4 text-red-500"></i>
							46,53%
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
