<template>
	<div
		class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
	>
		<div class="mb-0 rounded-t border-0 px-4 py-3">
			<div class="flex flex-wrap items-center">
				<div class="relative w-full max-w-full flex-1 flex-grow px-4">
					<h3 class="text-base font-semibold text-slate-700">Social traffic</h3>
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
				<thead class="thead-light">
					<tr>
						<th
							class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						>
							Referral
						</th>
						<th
							class="whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						>
							Visitors
						</th>
						<th
							class="min-w-140-px whitespace-nowrap border border-l-0 border-r-0 border-solid border-slate-100 bg-slate-50 px-6 py-3 text-left align-middle text-xs font-semibold uppercase text-slate-500"
						></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							Facebook
						</th>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							1,480
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<div class="flex items-center">
								<span class="mr-2">60%</span>
								<div class="relative w-full">
									<div
										class="flex h-2 overflow-hidden rounded bg-red-200 text-xs"
									>
										<div
											style="width: 60%"
											class="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
										></div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							Facebook
						</th>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							5,480
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<div class="flex items-center">
								<span class="mr-2">70%</span>
								<div class="relative w-full">
									<div
										class="flex h-2 overflow-hidden rounded bg-emerald-200 text-xs"
									>
										<div
											style="width: 70%"
											class="flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none"
										></div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							Google
						</th>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							4,807
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<div class="flex items-center">
								<span class="mr-2">80%</span>
								<div class="relative w-full">
									<div
										class="flex h-2 overflow-hidden rounded bg-purple-200 text-xs"
									>
										<div
											style="width: 80%"
											class="flex flex-col justify-center whitespace-nowrap bg-purple-500 text-center text-white shadow-none"
										></div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							Instagram
						</th>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							3,678
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<div class="flex items-center">
								<span class="mr-2">75%</span>
								<div class="relative w-full">
									<div
										class="bg-lightBlue-200 flex h-2 overflow-hidden rounded text-xs"
									>
										<div
											style="width: 75%"
											class="bg-lightBlue-500 flex flex-col justify-center whitespace-nowrap text-center text-white shadow-none"
										></div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
						>
							twitter
						</th>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							2,645
						</td>
						<td
							class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
						>
							<div class="flex items-center">
								<span class="mr-2">30%</span>
								<div class="relative w-full">
									<div
										class="flex h-2 overflow-hidden rounded bg-orange-200 text-xs"
									>
										<div
											style="width: 30%"
											class="flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none"
										></div>
									</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
