<script setup>
import team2 from '../../assets/img/team-2-800x800.jpg'
</script>
<template>
	<div class="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
		<div class="px-6">
			<div class="flex flex-wrap justify-center">
				<div class="flex w-full justify-center px-4">
					<div class="relative">
						<img
							alt="..."
							:src="team2"
							class="absolute -m-16 -ml-20 h-auto max-w-150-px rounded-full border-none align-middle shadow-xl lg:-ml-16"
						/>
					</div>
				</div>
				<div class="mt-20 w-full px-4 text-center">
					<div class="flex justify-center py-4 pt-8 lg:pt-4">
						<div class="mr-4 p-3 text-center">
							<span class="block text-xl font-bold uppercase tracking-wide text-slate-600"> 22 </span>
							<span class="text-sm text-slate-400">Friends</span>
						</div>
						<div class="mr-4 p-3 text-center">
							<span class="block text-xl font-bold uppercase tracking-wide text-slate-600"> 10 </span>
							<span class="text-sm text-slate-400">Photos</span>
						</div>
						<div class="p-3 text-center lg:mr-4">
							<span class="block text-xl font-bold uppercase tracking-wide text-slate-600"> 89 </span>
							<span class="text-sm text-slate-400">Comments</span>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-12 text-center">
				<h3 class="mb-2text-xl font-semibold leading-normal text-slate-700">Jenna Stones</h3>
				<div class="mt-0 mb-2 text-sm font-bold uppercase leading-normal text-slate-400">
					<i class="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>
					Los Angeles, California
				</div>
				<div class="mb-2 mt-10 text-slate-600">
					<i class="fas fa-briefcase mr-2 text-lg text-slate-400"></i>
					Solution Manager - Creative Tim Officer
				</div>
				<div class="mb-2 text-slate-600">
					<i class="fas fa-university mr-2 text-lg text-slate-400"></i>
					University of Computer Science
				</div>
			</div>
			<div class="mt-10 border-t border-slate-200 py-10 text-center">
				<div class="flex flex-wrap justify-center">
					<div class="w-full px-4 lg:w-9/12">
						<p class="mb-4 text-lg leading-relaxed text-slate-700">
							An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based
							Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate
							feel with a solid groove structure. An artist of considerable range.
						</p>
						<a href="javascript:void(0);" class="font-normal text-emerald-500"> Show more </a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
